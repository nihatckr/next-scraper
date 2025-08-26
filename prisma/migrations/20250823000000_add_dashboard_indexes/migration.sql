-- Migration for dashboard performance optimization indexes

-- Index for product brand queries
CREATE INDEX idx_products_brand_name ON products(brandName);

-- Index for product price queries and aggregations
CREATE INDEX idx_products_price ON products(price);

-- Index for product creation date (for recent changes)
CREATE INDEX idx_products_created_at ON products(createdAt);

-- Index for product stock availability queries
CREATE INDEX idx_product_stock_availability ON product_stock(availability);

-- Index for price history timestamp queries
CREATE INDEX idx_price_history_timestamp ON price_history(timestamp);

-- Index for stock history timestamp queries
CREATE INDEX idx_stock_history_timestamp ON stock_history(timestamp);

-- Index for subcategory product relations (for category distribution)
CREATE INDEX idx_subcategory_products_b ON _SubCategoryProducts(B);
CREATE INDEX idx_subcategory_products_a ON _SubCategoryProducts(A);

-- Index for brand timestamp (for brand queries)
CREATE INDEX idx_brands_timestamp ON brands(timestamp);

-- Index for subcategory level and leaf status
CREATE INDEX idx_subcategories_level_leaf ON sub_categories(level, isLeaf);

-- Index for product stock product_id and color_id
CREATE INDEX idx_product_stock_product_color ON product_stock(productId, colorId);

-- Index for product colors product_id
CREATE INDEX idx_product_colors_product_id ON product_colors(productId);

-- Index for product sizes product_id
CREATE INDEX idx_product_sizes_product_id ON product_sizes(productId);