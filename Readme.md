# ConversAI Labs - AI Coding Agent Assignment

## Project Overview

This project was completed as part of the ConversAI Labs AI Coding Agent assignment.

The objective was to build a Python-based AI Coding Agent capable of understanding an existing Node.js codebase, identifying the relevant files automatically, implementing a product requirement with minimal user guidance, and summarizing the changes made.

The target application is based on the **Node Easy Notes** project by Callicoder. The Node.js application was enhanced without rewriting it in Python.

---

# Objective

User Request:

> Improve the application so users can better organise and search their notes.

The AI agent analyzed the existing repository and implemented the following improvements:

- Categories for notes
- Tags for notes
- Search functionality
- Better organization of notes
- Preserved all existing CRUD operations

---

# Project Structure

```
ConversAILabs-Assignment
│
├── ai_agent/
│   ├── agent.py
│   ├── explorer.py
│   ├── code_generator.py
│   ├── summarizer.py
│   ├── llm.py
│   ├── utils.py
│   └── requirements.txt
│
└── node-easy-notes-app/
    ├── app/
    ├── config/
    ├── server.js
    ├── package.json
    └── Readme.md
```

---

# Architecture

The solution consists of two independent components.

## 1. Python AI Agent

The AI agent is responsible for:

- Understanding the user request
- Exploring the repository
- Detecting important files
- Creating an execution plan
- Generating code modifications
- Summarizing completed work

The AI agent does **not** rewrite the Node.js project. Instead, it analyzes the existing codebase and determines where modifications are required.

---

## 2. Node.js Application

The original Express + MongoDB application was enhanced by adding:

- Categories
- Tags
- Search functionality
- Better note organization

All original CRUD APIs continue to work as before.

---

# AI Agent Workflow

The AI agent performs the following workflow:

### Step 1

Read the user's product request.

Example:

> Improve the application so users can better organise and search their notes.

### Step 2

Explore the repository recursively.

The agent scans folders and identifies important project files.

### Step 3

Identify relevant files automatically.

Examples:

- Models
- Controllers
- Routes
- Configuration files

### Step 4

Create a brief execution plan.

Example:

- Extend Note model
- Update CRUD logic
- Add search capability
- Preserve existing APIs

### Step 5

Generate the required code changes.

### Step 6

Update the Node.js application.

### Step 7

Generate a summary of the completed implementation.

---

# Repository Exploration

Before making any modifications, the AI agent automatically explored the repository structure.

The exploration process included:

- Scanning project directories
- Detecting Express application structure
- Identifying Models
- Identifying Controllers
- Identifying Routes
- Identifying Configuration files
- Determining which files needed modification based on the user's request

The following files were identified as relevant:

```
app/models/note.model.js
app/controllers/note.controller.js
app/routes/note.routes.js
config/database.config.js
server.js
```

The agent modified only the required files while preserving the existing application structure.

---

# Features Implemented

## Categories

Each note can now belong to a category.

Examples:

- Work
- Study
- Personal
- Testing

---

## Tags

Each note supports multiple tags.

Example:

```
[
    "NodeJS",
    "MongoDB"
]
```

---

## Search

Notes can now be searched using:

```
GET /notes?search=keyword
```

Search checks both:

- Title
- Content

Search is case-insensitive.

---

## Improved Note Organization

Users can now organize notes using:

- Categories
- Tags
- Search

without affecting existing CRUD functionality.

---

# CRUD Operations Tested

The following endpoints were tested successfully using Postman.

## Create

```
POST /notes
```

---

## Read

```
GET /notes
```

---

## Search

```
GET /notes?search=keyword
```

---

## Update

```
PUT /notes/:noteId
```

---

## Delete

```
DELETE /notes/:noteId
```

---

# Assumptions

- MongoDB Atlas is used as the database.
- Environment variables are stored in a .env file.
- Existing CRUD functionality must continue to work.
- Search should be case-insensitive.
- Categories are optional.
- Multiple tags can be assigned to each note.

---

# Trade-offs

The following design decisions were made:

- Regular Expression search was used for simplicity.
- Tags are stored as a string array.
- Categories remain optional.
- Existing API structure was preserved.
- MongoDB text indexing can be extended further in the future for better search performance.

---

# Technologies Used

- Python 3.11+
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Git
- GitHub
- Postman
- ChatGPT (AI-assisted development)

---

# How to Run

## Install dependencies

```
npm install
```

## Configure environment variables

Create a `.env` file.

Example:

```
MONGO_URI=<your_mongodb_connection_string>
PORT=3000
```

---

## Start the server

```
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

# API Examples

## Create Note

```
POST /notes
```

---

## Get Notes

```
GET /notes
```

---

## Search Notes

```
GET /notes?search=Node
```

---

## Update Note

```
PUT /notes/:noteId
```

---

## Delete Note

```
DELETE /notes/:noteId
```

---

# Submission

This repository contains:

- Python AI Coding Agent
- Modified Node.js application
- Documentation
- Working implementation of note organization features
- Search functionality
- Preserved CRUD APIs

---

# Deliverables

This submission includes:

✅ Python AI Agent source code

✅ Modified Node.js application

✅ README documentation

✅ GitHub repository

⬜ Screen recording (Google Drive link to be added during submission)

---

# Author

**Mohammed Kaif**

ConversAI Labs AI Coding Agent Assignment