This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Next.js E-commerce Admin Dashboard

A comprehensive admin dashboard for e-commerce data management built with Next.js 15, TypeScript, and Prisma.

## 🚀 Features

### Dashboard Analytics

- **Real-time Statistics**: Product, brand, category, and stock analytics
- **Interactive Charts**: Line, bar, area, and pie charts with Recharts
- **Historical Data**: Price and stock history tracking
- **System Monitoring**: Data sync status and system health

### Product Catalog Management

- **Product Listing**: Paginated product grid with search and filters
- **Product Details**: Comprehensive product information with images
- **Brand Management**: Brand statistics and product associations
- **Category Management**: Hierarchical category structure
- **Stock Management**: Real-time stock levels and availability

### Advanced Features

- **Global Search**: Fast product search across the entire catalog
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Loading States**: Skeleton loaders for better UX
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Database**: MySQL with Prisma ORM
- **Styling**: Tailwind CSS + shadcn/ui components
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
src/
├── app/
│   ├── (dashboard)/          # Dashboard pages
│   │   ├── page.tsx         # Main dashboard
│   │   ├── markalar/        # Brands page
│   │   ├── urunler/         # Products page
│   │   ├── kategoriler/     # Categories page
│   │   ├── stok/            # Stock page
│   │   ├── gecmis/          # History page
│   │   └── sistem/          # System page
│   ├── katalog/             # Product catalog
│   │   ├── page.tsx         # Product listing
│   │   └── [id]/            # Product details
│   └── api/
│       └── search/          # Search API endpoint
├── components/
│   ├── dashboard/           # Dashboard components
│   ├── catalog/             # Catalog components
│   ├── charts/              # Chart components
│   └── ui/                  # Reusable UI components
├── lib/
│   ├── data/                # Data access layer
│   ├── types.ts             # TypeScript types
│   ├── utils.ts             # Utility functions
│   └── prisma.ts            # Database client
└── hooks/                   # Custom React hooks
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- MySQL database
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nihatckr/next-scraper.git
   cd next-scraper
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Update `.env.local` with your database connection:

   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/database_name"
   ```

4. **Set up the database**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application uses a comprehensive e-commerce database schema including:

- **Products**: Core product information with variants
- **Brands**: Brand management and associations
- **Categories**: Hierarchical category structure
- **Stock**: Real-time inventory tracking
- **Price History**: Historical price tracking
- **Users**: User management system
- **Data Syncs**: System synchronization logs

## 🎨 UI Components

Built with shadcn/ui components for consistency and accessibility:

- **Navigation**: Responsive sidebar with collapsible menu
- **Data Display**: Cards, tables, and charts
- **Forms**: Inputs, selects, and form validation
- **Feedback**: Loading states, error boundaries, and notifications
- **Layout**: Responsive grids and containers

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Adaptive Layout**: Components adapt to screen size
- **Touch Friendly**: Optimized for touch interactions

## 🔍 Search & Filtering

- **Global Search**: Search across all products
- **Advanced Filters**: Filter by brand, category, price range
- **Real-time Results**: Instant search with debouncing
- **Pagination**: Efficient data loading with pagination

## 📈 Performance

- **Server Components**: Leveraging Next.js 15 server components
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading
- **Caching**: Efficient data caching strategies
- **Bundle Analysis**: Optimized bundle size

## 🧪 Testing

- **TypeScript**: Compile-time type checking
- **ESLint**: Code quality and consistency
- **Build Verification**: Production build testing

## 🚀 Deployment

The application is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

### Build for Production

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Prisma](https://prisma.io/) - Database toolkit
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Recharts](https://recharts.org/) - Chart library for React

---

**Made with ❤️ by [Nihat Çakır](https://github.com/nihatckr)**
