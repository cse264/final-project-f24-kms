# KMS Final Project
## Matthew Castillo (mtc325), Kimberly Galdamez (kig225), Subbu Meyyappan (sum225)

### Application Name - Study Buddy
### Roles
1. Kimberly: UX/UI Designer - responsible for designing the interface, ensuring intuitive navigation, and enhancing the user experience.
1. Matthew: Backend Developer - implements database structure, user role management, and API integrations in Firebase.
1. Subbu: Frontend Developer - develops the user interface in React Native, integrates frontend components with Firebase, and ensures a smooth and responsive experience.

### Application Description and Functionality
StudyBuddy is a peer tutoring and study group matching platform where students can find study partners for specific subjects, set up study sessions, and communicate with other learners. This application supports multiple user roles, uses Firebase for data storage and authentication, provides an interactive UI, and integrates with the Google Calendar API for session scheduling.
### Requirements Fulfillment
#### User Accounts and Different User Roles
1. Admin:
Manages user content, approves tutor applications, and enforces
academic integrity policies.
2. Free User:
Can browse and join study groups, match with study partners, and participate in group discussions.
3. Premium User:
Gains unlimited access to study groups, requests private tutoring sessions, and receives session reminders.

#### Database
Firebase Firestore: Stores relational data, including users, subjects, and session details, with support for real-time updates. Firebase Authentication will handle user logins and roles, streamlining role-based access and permissions.
#### Interactive UI
#### 1. User Dashboard:
1. Features: Displays study group invitations, a calendar for upcoming sessions, and a group chat for communication.
1. Calendar: Users can schedule study sessions, with reminders appearing in-app and in Google Calendar.
#### 2. Group Chat:
1. Purpose: Allows study group members to discuss topics, coordinate meeting times, and share resources.
#### External API
1. Google Calendar API:
Integrated to allow users to add study sessions directly to their Google Calendar. Reminders for upcoming sessions can be managed through Google Calendar notifications.
#### User Story / Use Case
When a user accesses StudyBuddy, their experience varies based on their role:
1. Free User: <br>
○ Step 1: Signs up or logs in to access the platform. <br>
○ Step 2: Browses study groups by subject or popularity.<br>
○ Step 3: Joins a study group, views other members, and can initiate group discussions.<br>
○ Step 4: Schedules a session through the dashboard calendar, with reminders enabled via Google Calendar.<br>
1. Premium User: <br>
○ Step 1: Upgrades to premium to unlock additional features.<br>
○ Step 2: Joins study groups without limits and can request private tutoring.<br>
○ Step 3: Schedules private tutoring sessions with the option to sync with Google Calendar for reminders. <br>
○ Step 4: Receives reminders and notifications for upcoming sessions.<br>
1. Admin:<br>
○ Step 1: Logs into the admin dashboard.<br>
○ Step 2: Manages tutor applications, monitors group chat content, and enforces academic integrity. <br>
○ Step 3: Manages user reports and performs content moderation as needed.<br>
#### Technical Design
Tech Stack<br>
1. Frontend:<br>
○ React Native: Provides a cross-platform mobile app experience, leveraging components that integrate seamlessly with Firebase.<br>
○ UI Libraries: React Native Paper or Material UI for consistent and polished UI components, aligning with Kimberly’s design. <br>
1. Backend: <br>
○ Firebase Firestore: Manages data storage with real-time sync for sessions, user information, and roles. <br>
○ Firebase Authentication: Used to handle user accounts, roles, and secure access.<br>
○ Google Calendar API: Enables users to add study sessions to their calendar, ensuring they receive reminders.<br>
1. Hosting: <br>
Native<br>

### How to run
1. Install Firebase. Follow steps listed [here](https://firebase.google.com/docs/web/setup) to add firebase to your javascript program. From this directory however, run `npm install` to install all dependencies used in this program.

1. Run `npm run start` from study-buddy directory 