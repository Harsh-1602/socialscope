# Social Scope
_Analyze social media performance with Langflow, DataStax Astra DB, and GPT._

![Screenshot 2025-01-10 200926](https://github.com/user-attachments/assets/378db45b-3fdf-4692-a989-96bcd80fa057)

## Overview
Social Scope is a social media analytics tool designed to analyze post engagement data and generate actionable insights. By integrating Langflow for workflow automation, DataStax Astra DB for efficient data storage and querying, and GPT for natural language insights, Social Scope provides an end-to-end solution for understanding and optimizing social media strategies.

## Features
**Dynamic Querying**: Accepts user input to fetch engagement data from Astra DB based on post type (carousel, reels, static images, etc.).

**Data Analysis**: Calculates average engagement metrics such as likes, shares, and comments for each post type.

**Actionable Insights**: Uses GPT to present meaningful insights, such as "Reels drive 2x more comments compared to static posts."

**Kaggle Dataset Integration**: Utilizes real-world social media engagement data for analysis.

## Workflow Architecture
**1. Input:**
Users provide a query (e.g., What is the engagement for reel posts?).

**2. Agent:**
Interprets the query and interacts with Astra DB as a tool.

**3. Database Query:**
Fetches relevant data from Astra DB using SQL-like queries.

**4. Preliminary Analysis:**
Calculates average engagement metrics and formats results.

**5. LLM Integration:**
Uses GPT to convert data into insightful and user-friendly insights.

## Setup Instructions
1. Clone the Repository
 ```git clone https://github.com/Harsh-1602/socialscope.git ```
 ```cd social-scope ```

2. Install Dependencies
   Install Python dependencies:
 ```pip install -r requirements.txt ```

   Install Langflow:
 ```pip install langflow ```

3. Set Up DataStax Astra DB
   Sign up for a free Astra DB account.

   Create a new database and import the Kaggle Social Media Analytics dataset.

   Ensure the schema includes fields like post_id, post_type, likes, shares, and comments.

5. Configure Database Connection
   
   Update the config.py file with your Astra DB credentials:
   ```ASTRA_DB_ID = "your_database_id" ```
 
   ```ASTRA_DB_REGION = "your_region" ```
 
   ```ASTRA_DB_KEYSPACE = "your_keyspace" ```
 
   ```ASTRA_DB_CLIENT_ID = "your_client_id" ```
 
   ```ASTRA_DB_CLIENT_SECRET = "your_client_secret"  ```
 
5. Load Langflow Workflow
   Open Langflow UI:
   langflow
   Import the workflow file social_scope_workflow.json provided in this repository.

6. Run the Project


## Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

## License
This project is licensed under the MIT License.

## Acknowledgments
Langflow for workflow automation.
DataStax Astra DB for database management.
OpenAI GPT for generating insights.

