# ConversAI Labs - AI Coding Agent Assignment

## Project Overview

This project was completed as part of the ConversAI Labs AI Coding Agent assignment.

The objective was to build a Python-based AI agent that can understand an existing Node.js codebase, determine the files that need modification, implement a new product requirement, and summarize the changes.

The target application is based on the Node Easy Notes application developed by Callicoder.

---

# Product Requirement

Improve the application so users can better organise and search their notes.

The AI agent analyzed the repository and implemented the following features:

- Note Categories
- Note Tags
- Search Notes
- Improved filtering
- Better note organization

The existing CRUD functionality has been preserved.

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
    └── package.json
```

---

# Architecture

The solution consists of two independent parts.

## 1. AI Agent (Python)

The AI Agent is responsible for:

- Understanding the user request
- Exploring the repository
- Identifying relevant files
- Creating an execution plan
- Generating code changes
- Producing a summary of modifications

The Node.js application itself is not rewritten in Python.

---

## 2. Node.js Application

The existing Express and MongoDB application was modified by adding:

- Categories
- Tags
- Search functionality
- Improved organization features

The original CRUD operations continue to work without breaking existing functionality.

---

# Agent Workflow

The AI agent follows these steps:

1. Read the user request
2. Explore the repository structure
3. Detect important files
4. Create an execution plan
5. Generate code changes
6. Update the Node.js project
7. Summarize the completed work

---

# Repository Exploration

The AI agent automatically explored the repository before making changes.

Important files identified include:

- app/models/note.model.js
- app/controllers/note.controller.js
- app/routes/note.routes.js
- config/database.config.js
- server.js

These files were modified to implement the requested functionality.

---

# Features Implemented

## Categories

Each note can now be assigned to a category.

Example:

```
Study
Work
Personal
Testing
```

---

## Tags

Each note supports multiple tags.

Example:

```
["NodeJS","MongoDB"]
```

---

## Search

Users can search notes using:

```
GET /notes?search=keyword
```

The search checks the note title and content.

---

## CRUD Operations

The following endpoints were tested successfully.

### Create

```
POST /notes
```

### Read

```
GET /notes
```

### Search

```
GET /notes?search=keyword
```

### Update

```
PUT /notes/:noteId
```

### Delete

```
DELETE /notes/:noteId
```

---

# Assumptions

- MongoDB Atlas is used as the database.
- Environment variables are stored using a .env file.
- Existing APIs should continue to work.
- Search should be case-insensitive.

---

# Trade-offs

- Regex search was chosen for simplicity.
- Categories remain optional.
- Tags are stored as a string array.
- Full-text indexing was added for future improvements.

---

# Technologies Used

Python 3.11+

Node.js

Express.js

MongoDB Atlas

Mongoose

dotenv

Git

GitHub

Postman

---

# How to Run

## Install dependencies

```
npm install
```

## Start server

```
node server.js
```

The application runs at

```
http://localhost:3000
```

---

# API Examples

Create Note

```
POST /notes
```

Get Notes

```
GET /notes
```

Search Notes

```
GET /notes?search=Node
```

Update Note

```
PUT /notes/:noteId
```

Delete Note

```
DELETE /notes/:noteId
```

---

# Submission

This repository contains:

- Python AI Coding Agent
- Modified Node.js application
- Documentation
- Working implementation of note organization and search features

---

# Author

Mohammed Kaif

ConversAI Labs AI Coding Agent Assignment