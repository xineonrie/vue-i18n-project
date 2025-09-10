# 🌐 Vue 3 Multi-language Switcher Demo

## 1. Project Overview
This project is a demo built with **Vue 3 + Vite + Vuex + Capacitor** to showcase an in-app language switcher.  I selected a figma design file from the figma community, and developed a music playing app with 2 pages as an example.

Figma: https://www.figma.com/design/P3SpXlP8z7pyCn8jgEpmAW/Music-player-App-Design-%7C-Free-to-use--Community-?node-id=0-1&p=f&t=dKRlH3cWzBSBFXIY-0

It demonstrates:
- Runtime language switching without rebuilding the app
- Initial language setup via URL query parameter
- Persistent language preference across sessions
- Consistent support on Web, iOS, and Android (via Capacitor)
- Lazy-loading and code-splitting for large translation files
- Basic accessibility support 

## 2. Tech Stack
- **Vue 3** – Front-end framework  
- **Vite** – Build tool  
- **Vuex** – State management  
- **vue-i18n** – Internationalization  
- **Capacitor** – Cross-platform deployment (Web/Android/iOS)  
- **accessibility**

I know nothing about these so learn first! 🧐

## 3. Features
- [x] P0 - Basic page structure
    - [x] P0 - Router Authorization/ Guard
    - [x] P0 - Web API Wrapper (both mobile and web)
    - [x] P0 - Login Page
    - [ ] P1 - Home Page
- [x] P0 - i18n support
    - [x] P0 - Runtime language switching 
    - [x] P0 - Initial language setup from URL parameter (`?lang=xx`)  
    - [x] P0 - Persistent language preference  
    - [x] P0 - Updates `<html lang>` and supports RTL languages 
- [ ] P0 - Cross-platform support (Web + iOS + Android)  
    - [x] P0 - Basic layout component (responsive design)
    - [x] P0 - Web layout check
    - [ ] P0 - Android layout check
    - [x] P1 - ios layout check (Xcode needed)
- [ ] P0 - Build performance optimization 
    - [x] P0 - Lazy-loaded translation files (one chunk per language)   
    - [ ] P0 - Tree shaking
- [ ] P0 - Basic accessibility support  
- [ ] P1 - Project stability support
    - [ ] P1 - Localazy integration 
    - [ ] P2 - Bundle size calculation
    - [ ] P2 - Unit test

## 4. How to Demo

TODO


## 5. Future Improvements
TODO
