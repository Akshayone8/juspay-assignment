# Dashboard Application


This repository contains a React Dashboard application developed using React and styled-components. The project is built with Vite as the web bundler and hosted on Netlify. You can view the live application [here](https://akshay-juspay-dashboard.netlify.app/).

## Table of Contents

- Features
- Prerequisites
- Setup and Run Locally
- Design Decisions
- Challenges Faced
- Improvements Made
- Technologies Used
- License

## Features

- Responsive Dashboard: Adaptive design for a seamless experience across devices.
- Dark Mode: Theme switcher that toggles between light and dark themes.
- Dynamic Styling: Uses styled-components for modular and maintainable styles.
- Performance-Optimized: Built with Vite, ensuring faster development builds and optimized bundling.

## Prerequisites

Make sure you have the following installed:

[Node.js](https://nodejs.org/en) (version 14 or above)
[npm](https://www.npmjs.com/) or [yarn](https://yarn.com/)

## Setup and Run Locally

1. Clone the repository:
`git clone https://github.com/Akshayone8/juspay-assignment.git`
2. Navigate to the project directory:
`cd your-repo-name`
3. Install dependencies:
`npm install`
` Or if you're using yarn`
`yarn`
4. Start the development server:

## Design Decisions

- React with styled-components:
Using styled-components allowed for modular, reusable, and scoped styles, reducing CSS conflicts and improving maintainability. This also enabled easy implementation of dynamic styling, such as theme switching.

- Vite for web bundling:
Vite was chosen for its superior performance in development and optimized builds compared to traditional bundlers like Webpack. The hot module replacement (HMR) made the development process seamless and efficient.

- Dark Mode Implementation:
The theme switcher dynamically toggles between light and dark themes, enhancing user experience and accessibility.

- Netlify Deployment:
Netlify's simplicity and free hosting tiers made it an ideal choice for deploying the application quickly and efficiently.


## Challenges Faced

1. Dynamic Styling:
Implementing smooth transitions for theme switching required carefully handling props and ensuring consistent behavior across all components.

2. Component Structure:
Structuring the application components for scalability while maintaining readability posed initial challenges. Adopting a modular component approach solved this issue.

3. Vite Integration:
Adjusting to the Vite ecosystem, including its plugin system and configuration, was initially unfamiliar but ultimately rewarding due to its performance benefits.

## Technologies Used

1. React: Component-based library for building user interfaces.
2. styled-components: For creating reusable and dynamic styled components.
3. Vite: Fast bundler and development server.
4. Netlify: For hosting the application.
