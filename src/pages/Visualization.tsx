import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import ThreeBackground from '../components/ThreeBackground';
import BackgroundAnimation from '../components/BackgroundAnimation';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import Papa from 'papaparse';

interface DataRow {
  Platform: string;
  PostType: string;
  Likes: number;
  Comments: number;
  Shares: number;
  AudienceAge: number;
  AudienceGender: number;
}

function Visualization() {
  const [data, setData] = useState<DataRow[]>([]);
  const [selectedPostType, setSelectedPostType] = useState<string | null>(null);

  // Add this function to categorize ages
  const calculateAgeGroup = (age: number): string => {
    if (age <= 25) return '18-25';
    if (age <= 35) return '26-35';
    if (age <= 45) return '36-45';
    return '46+';
  };

  useEffect(() => {
    // Add error handling and debugging
    fetch('/data/data.csv')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(csvString => {
        console.log('Raw CSV string:', csvString); // Debug raw CSV data
        const results = Papa.parse(csvString, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (results) => {
            console.log('Parsed results:', results); // Debug parsed results
            if (results.data && results.data.length > 0) {
              setData(results.data as DataRow[]); // Add type assertion here
            }
          },
          error: (error: Error) => {
            console.error('CSV parsing error:', error);
          }
        });
      })
      .catch(error => {
        console.error('Error loading CSV:', error);
      });
  }, []);

  // Add data loading check
  if (data.length === 0) {
    return <div>Loading data...</div>;
  }

  // Filter data based on selected post type
  const filteredData = selectedPostType 
    ? data.filter(item => item.PostType === selectedPostType)
    : data;

  // Prepare data for post type distribution
  const postTypeData = Object.entries(
    data.reduce((acc, curr) => {
      const type = curr.PostType;
      if (!acc[type]) acc[type] = 0;
      acc[type] += curr.Likes + curr.Comments + curr.Shares;
      return acc;
    }, {} as Record<string, number>)
  ).map(([type, value]) => ({ PostType: type, Engagement: value }));

  // Modify platform data preparation to include better labels
  const platformData = Object.entries(
    filteredData.reduce((acc, curr) => {
      if (!acc[curr.Platform]) acc[curr.Platform] = 0;
      acc[curr.Platform] += 1;
      return acc;
    }, {} as Record<string, number>)
  ).map(([platform, count]) => ({
    name: platform,
    value: count,
    // Make sure label matches exactly what's in your CSV
    label: platform === 'LinkedIn' ? 'LinkedIn' :
           platform === 'Twitter' ? 'Twitter' :
           platform === 'Instagram' ? 'Instagram' :
           platform === 'Facebook' ? 'Facebook' : platform
  }));

  // Updated gender distribution calculation to handle string values
  const genderData = filteredData.reduce((acc, item) => {
    const gender = item.AudienceGender;
    if (typeof gender === 'string') {
      acc[gender] = (acc[gender] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  // Convert to array format for pie chart
  const genderChartData = Object.entries(genderData).map(([gender, count]) => ({
    name: gender,
    value: Math.round((count / filteredData.length) * 100)
  }));

  console.log('Gender Chart Data:', genderChartData);

  // Add console logs for debugging
  console.log('Filtered Data:', filteredData);
  console.log('Gender Data:', genderData);

  // Define default age data
  const defaultAgeData = [
    { ageGroup: '18-25', likes: 0, comments: 0, shares: 0 },
    { ageGroup: '26-35', likes: 0, comments: 0, shares: 0 },
    { ageGroup: '36-45', likes: 0, comments: 0, shares: 0 },
    { ageGroup: '46+', likes: 0, comments: 0, shares: 0 }
  ];

  // Updated age distribution calculation using default data when no data is available
  const ageData = filteredData.length > 0 
    ? Object.entries(
        filteredData.reduce((acc, curr) => {
          const ageGroup = calculateAgeGroup(curr.AudienceAge);
          if (!acc[ageGroup]) {
            acc[ageGroup] = {
              ageGroup,
              likes: 0,
              comments: 0,
              shares: 0
            };
          }
          acc[ageGroup].likes += curr.Likes || 0;
          acc[ageGroup].comments += curr.Comments || 0;
          acc[ageGroup].shares += curr.Shares || 0;
          return acc;
        }, {} as Record<string, any>)
      ).map(([group, data]) => data)
    : defaultAgeData;  // Use default data when no data is available

  // Sort age groups in correct order
  const ageGroupOrder = ['18-25', '26-35', '36-45', '46+'];
  ageData.sort((a, b) => 
    ageGroupOrder.indexOf(a.ageGroup) - ageGroupOrder.indexOf(b.ageGroup)
  );

  // Handle bar click for post type selection
  const handlePostTypeClick = (data: any) => {
    setSelectedPostType(selectedPostType === data.PostType ? null : data.PostType);
  };

  // Custom label for inside pie chart segments
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor="middle" 
        dominantBaseline="central"
        fontSize="16"
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <ThreeBackground />
      <div className="min-h-screen bg-gradient-to-b from-slate-900/90 via-slate-800/90 to-slate-900/90">
        <Navigation />
        <div className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-white mb-8">
            Social Media Analytics Dashboard
            {selectedPostType && <span className="text-blue-400"> - {selectedPostType}</span>}
          </h1>

          {/* Post Type Distribution */}
          <div className="bg-slate-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-lg shadow-xl mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">Post Type Distribution</h2>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={postTypeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="PostType" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="Engagement" 
                    fill="#8884d8" 
                    onClick={handlePostTypeClick}
                    cursor="pointer"
                    opacity={selectedPostType ? 0.7 : 1}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Platform Distribution */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-lg shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Platform Distribution</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={platformData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={100}
                      dataKey="value"
                      nameKey="name"
                    >
                      {platformData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={
                            entry.name === 'LinkedIn' ? '#8884d8' : 
                            entry.name === 'Facebook' ? '#82ca9d' : 
                            entry.name === 'Instagram' ? '#ffc658' :
                            '#ff7300'
                          } 
                        />
                      ))}
                    </Pie>
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Gender Distribution */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-lg shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Gender Distribution</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderChartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={100}
                      dataKey="value"
                      nameKey="name"
                    >
                      {genderChartData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={
                            entry.name === 'Male' ? '#8884d8' : 
                            entry.name === 'Female' ? '#82ca9d' : 
                            '#ffc658'
                          } 
                        />
                      ))}
                    </Pie>
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Age Distribution */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-gray-700 p-6 rounded-lg shadow-xl">
              <h2 className="text-xl font-semibold text-white mb-4">Age Distribution Engagement</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ageGroup" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="likes" name="Likes" fill="#8884d8" />
                    <Bar dataKey="comments" name="Comments" fill="#82ca9d" />
                    <Bar dataKey="shares" name="Shares" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visualization;