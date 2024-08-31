# Services Directory

The services folder typically contains functions or classes that interact with external APIs, handle business logic, or perform other utility tasks. These are usually independent of the React component tree.

## Structure

- **authService.js**: Handles authentication-related API requests, including login, logout, signup, and token management.
- **jobService.js**: Manages API calls related to job postings, including creating, updating, deleting, and retrieving job listings.
- **profileService.js**: Handles API requests related to user profiles, such as fetching and updating profile information.
- **alumniService.js**: Manages API calls related to alumni data, including fetching alumni information and filtering alumni lists.
- **communityService.js**: Handles API requests related to community posts and referrals.

## Usage

Service functions are designed to be reusable and handle all interactions with the backend. They are typically used within components, hooks, or context providers.
