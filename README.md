# 🚀 Topic Search React Component – Catalogue Management System

## 📋 Project Overview

A React-based topic browsing and search component that simulates TOTLE's catalogue management UI. It enables users to explore and filter educational topics in real time.

## 🎯 Problem Statement

Build a React component that displays a list of topics with a search bar allowing case-insensitive, real-time filtering.

## ✨ Features Implemented

### **Core Requirements**

* ✅ Real-time search filtering (case-insensitive)
* ✅ Topic cards with name & category
* ✅ "No topics found" state
* ✅ Clean, responsive UI
* ✅ Handles empty inputs
* ✅ In-memory dataset with 8 sample topics

### **Enhanced Features**

* 🔍 Multi-field search (name + category)
* 📱 Fully responsive UI
* 🎨 Modern hover effects
* 📊 Results counter
* 🗑️ Clear search button
* ♿ Accessibility compliant

---

## 🛠 Technology Stack

* **Frontend:** React 18
* **State Management:** React Hooks (useState, useMemo)
* **Styling:** CSS3 (Flexbox + Grid)
* **Build Tool:** Create React App

---

## 📁 Project Structure

```
topic-search-app/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── TopicSearch.js
│   │   └── TopicSearch.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

## 🚀 Installation & Setup

### **Prerequisites**

* Node.js (v14+)
* npm or yarn

### **Steps**

1. **Extract Project**

   ```bash
   unzip topic-search-app.zip
   cd topic-search-app
   ```
2. **Install Dependencies**

   ```bash
   npm install
   ```
3. **Start Development Server**

   ```bash
   npm start
   ```
4. **Open in Browser**

   * [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
```

---

## 💻 Usage Examples

* **Empty search:** Shows all 8 topics
* **"thermo":** Thermodynamics
* **"physics":** Shows 3 physics topics
* **"bio":** Biology topics (Cell Biology, Genetics)
* **"xyz":** Shows "No topics found"

### **Sample Topics**

* **Physics:** Thermodynamics, Quantum Mechanics, Electromagnetism
* **Chemistry:** Organic Chemistry
* **Mathematics:** Calculus
* **Biology:** Cell Biology, Genetics
* **Computer Science:** Algorithms

---

## 🔧 Component Architecture

### **Main Components**

* **TopicSearch.js** – core component handling search & rendering
* **SearchInput** – user input + clear button
* **TopicCard** – displays topic details
* **ResultsInfo** – shows count & search summary

### **Key Implementation Details**

* 🔸 useState for search state
* 🔸 useMemo for optimized filtering
* 🔸 React.memo for preventing extra renders
* 🔸 Responsive layout with Grid/Flexbox
* 🔸 Clear empty state feedback

---

## 🎨 Design Principles

* Clean, minimalist UI
* Mobile-first responsive layout
* ARIA labels for accessibility
* Smooth hover & transition animations
* Academic-themed color palette

---

## 🔄 Development Workflow

### **Step 1: Init**

* Created CRA project
* Established folder structure

### **Step 2: Core Features**

* Built search input
* Created sample data
* Added filtering logic
* Added topic cards

### **Step 3: UX Enhancements**

* Real-time search updates
* Empty states
* Responsive grid
* Hover effects

### **Step 4: Polish**

* useMemo optimization
* Cross-browser testing
* Mobile testing
* Documentation cleanup

---

## 🌐 GitHub Repository

[https://github.com/Varshi000/topic-search-app](https://github.com/Varshi000/topic-search-app)
