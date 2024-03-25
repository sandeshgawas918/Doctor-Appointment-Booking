/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode:false,   
    images:{
        unoptimized:true,
        domains:['res.cloudinary.com','lh3.googleusercontent.com']
    }
};

export default nextConfig;
