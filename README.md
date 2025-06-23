# GymBeam Case Study – React Developer (Next.js + Tailwind)

This project is a simple e-commerce application developed as part of the GymBeam hiring process. It displays a product list and detail views for authenticated users. The app uses React, Next.js, Tailwind CSS, and the Fake Store API.

---

## 🔧 Technologies Used

- **React** (with Next.js App Router)
- **Tailwind CSS**
- **Fake Store API** (`https://fakestoreapi.com`)
- **LocalStorage** for authentication

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/gymbeam-case.git
cd gymbeam-case
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open your browser and go to:
```
http://localhost:3000
```

---

## 🔑 Authentication

- Use the **Login page** to authenticate.
- Login requires any email and password (simulated login).
- After login:
  - Product list and detail views are accessible
  - Email is shown in the header

---

## 🔒 Page Protection

- `/views/Products` and `/views/ProductDetail/[id]` are **protected routes**.
- If not authenticated, the user is redirected to the Login page.

---

## 📁 Project Structure

```
app/
├── layout.tsx
├── page.tsx (Home)
├── globals.css
├── views/
│   ├── Login/
│   ├── Products/
│   └── ProductDetail/[id]/
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── StarRating.tsx
│   └── Icons.tsx
├── context/
│   └── auth-context.tsx
```

---

## 📸 Screenshots
Screenshots of the app on desktop and mobile devices are included in the `/screenshots` folder.

---

## 📦 Build for Production
```bash
npm run build
```

---

## ✅ Requirements Met
- ✅ Login + Logout
- ✅ Protected products & detail pages
- ✅ Responsive layout
- ✅ Styled using Tailwind
- ✅ GymBeam branding (logo, color scheme)
- ✅ Based on Fake Store API

---

## 📬 Contact
For any questions or issues, please contact me at: `martin.blascak86@gmail.com`