# React Native with Expo - 09-03-26

////////////////////////////

## Output

![Output Screenshot](./my-app/assets/images/output.png)

## Installation

### Clone the Repository
```powershell
git clone --depth 1 --filter=blob:none --sparse https://github.com/D3V-S4NJ4Y/TT-Classes.git; cd TT-Classes; git sparse-checkout set 09-03-26
```

### Navigate to Project Directory

```powershell
cd 09-03-26/my-app
```

### Install Dependencies

```powershell
npm install
```

## Running the Project

### Start Development Server

```powershell
npm start
```

### Run on Specific Platform

```powershell
# Web
npm run web
# or press 'w' in terminal

# Android
npm run android
# or press 'a' in terminal

# iOS
npm run ios
# or press 'i' in terminal (macOS only)
```

## Project Structure

```
09-03-26/
├── README.md                    # Project documentation
└── my-app/
    ├── package.json            # Dependencies and scripts
    ├── app.json                # Expo configuration
    ├── tsconfig.json           # TypeScript configuration
    ├── assets/                 # Images and static assets
    │   └── images/
    │       ├── icon.png
    │       ├── favicon.png
    │       └── output.png
```

## Key Components

| File | Description |
|------|-------------|
| `App.js` | Main application file |