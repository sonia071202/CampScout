 CampScout ⛺️

**CampScout** is a full-stack campground discovery platform featuring an **AI-powered recommendation engine**. Users can create accounts, list campgrounds, review locations, and explore destinations using interactive cluster maps.

Unlike standard directories, CampScout leverages **Natural Language Processing (TF-IDF)** to analyze campground descriptions and suggest similar locations to users, enhancing discovery and user engagement.

## 🚀 Key Features

* **🤖 AI-Powered Recommendations:** Custom content-based filtering engine using TF-IDF algorithms to suggest similar campgrounds.
* **🔐 Secure Authentication:** User login and registration using Passport.js with salted/hashed passwords.
* **🗺️ Interactive Mapping:** Dynamic Cluster Maps and custom location pins using MapTiler API.
* **🛡️ Robust Security:** Helmet.js for header security, Mongo Injection protection, and JOI for server-side validation.
* **💬 Reviews & Ratings:** Real-time review system with star ratings and author verification.
* **☁️ Cloud Storage:** Image storage and optimization using Cloudinary.

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **AI/ML:** Natural (NLP library for Node.js)
* **Frontend:** EJS, Bootstrap 5, MapTiler SDK
* **Utilities:** Joi, Helmet, Connect-Flash

## ⚙️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/CampScout.git](https://github.com/YOUR_USERNAME/CampScout.git)
    cd CampScout
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add the following:
    ```env
    CLOUDINARY_CLOUD_NAME=your_name
    CLOUDINARY_KEY=your_key
    CLOUDINARY_SECRET=your_secret
    MAPBOX_TOKEN=your_maptiler_token
    DB_URL=mongodb://127.0.0.1:27017/yelp-camp
    SECRET=thisshouldbeabettersecret
    ```

4.  **Seed the Database (Optional)**
    Populate the database with sample data and images:
    ```bash
    node seeds/index.js
    ```

5.  **Run the App**
    ```bash
    node app.js
    ```
    Visit `http://localhost:3000` in your browser.

## 📸 Screenshots
<img width="1919" height="970" alt="Screenshot 2025-12-11 140814" src="https://github.com/user-attachments/assets/7bd2cbf9-4198-472f-8907-2d83c4bbb3f6" />

<img width="1920" height="966" alt="Screenshot 2025-12-11 140831" src="https://github.com/user-attachments/assets/41537a67-6d3c-46f0-9288-121ff52b0e73" />

<img width="1919" height="962" alt="Screenshot 2025-12-11 140933" src="https://github.com/user-attachments/assets/23f8a51e-e62d-4ce4-a6f2-8857ec503e8c" />

