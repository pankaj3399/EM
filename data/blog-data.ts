// This is a mock data file for blog posts
// In a real application, this would likely be fetched from a CMS or database

export interface BlogPost {
    title: string
    slug: string
    date: string
    excerpt: string
    content: string
    thumbnail: string
    keywords: string[]
  }
  
  const blogPosts: BlogPost[] = [
    {
      title: "How to Maintain Your HVAC System",
      slug: "how-to-maintain-your-hvac-system",
      date: "April 7, 2025",
      excerpt: "Regular maintenance of your HVAC system can save you money and extend its lifespan.",
      content: `
        <p>Regular maintenance of your HVAC system is essential for optimal performance and longevity. Here are some tips to keep your system running efficiently:</p>
        
        <h2>Change Your Filters Regularly</h2>
        <p>One of the simplest yet most effective maintenance tasks is changing your air filters regularly. Dirty filters restrict airflow, reducing efficiency and potentially damaging your system. For standard 1-3 inch filters, replace them every 30-90 days.</p>
        
        <h2>Keep Your Outdoor Unit Clean</h2>
        <p>Make sure the area around your outdoor unit is clear of debris, leaves, and vegetation. Aim for at least 2 feet of clearance around the unit to ensure proper airflow.</p>
        
        <h2>Schedule Professional Maintenance</h2>
        <p>Have your system professionally serviced twice a year—ideally before the heating season and before the cooling season. Professional technicians can identify and fix small issues before they become major problems.</p>
        
        <h2>Check Your Thermostat</h2>
        <p>Ensure your thermostat is working correctly. Consider upgrading to a programmable or smart thermostat to improve efficiency and comfort.</p>
        
        <h2>Clean Your Vents and Registers</h2>
        <p>Regularly vacuum your vents and registers to remove dust and debris. Make sure they're not blocked by furniture, rugs, or curtains.</p>
        
        <p>By following these simple maintenance tips, you can extend the life of your HVAC system, improve indoor air quality, and save money on energy bills and repairs.</p>
      `,
      thumbnail: "hvac-maintenance.jpg",
      keywords: ["maintenance", "HVAC", "tips", "energy efficiency"],
    },
    {
      title: "Signs Your AC Needs Replacement",
      slug: "signs-your-ac-needs-replacement",
      date: "April 5, 2025",
      excerpt: "Learn the warning signs that indicate it's time to replace your air conditioning unit.",
      content: `
        <p>Air conditioning units don't last forever. Knowing when to replace your AC can save you from discomfort, high energy bills, and expensive emergency replacements. Here are key signs that indicate it's time for a new unit:</p>
        
        <h2>Your AC is More Than 10-15 Years Old</h2>
        <p>The average lifespan of an air conditioner is about 15 years. If yours is approaching or has exceeded this age, it's time to start planning for a replacement, even if it seems to be working fine.</p>
        
        <h2>Frequent Repairs</h2>
        <p>If you're calling for repairs more than once a year, your system is likely failing. Follow the $5,000 rule: multiply the cost of the repair by the age of your unit. If the result exceeds $5,000, replacement is usually more economical.</p>
        
        <h2>Rising Energy Bills</h2>
        <p>If your energy bills are steadily increasing despite similar usage patterns, your AC is likely losing efficiency. New models can be up to 40% more efficient than units manufactured just 10 years ago.</p>
        
        <h2>Inconsistent Temperatures</h2>
        <p>Does your home have hot and cold spots? Is your AC struggling to maintain the set temperature? These are signs that your system can no longer effectively cool your home.</p>
        
        <h2>Unusual Noises or Odors</h2>
        <p>Strange sounds like grinding, banging, or squealing indicate mechanical problems. Musty or burning odors can signal electrical issues or mold growth in the system.</p>
        
        <h2>R-22 Refrigerant</h2>
        <p>If your system uses R-22 (Freon), which is being phased out due to environmental concerns, replacement is inevitable. R-22 is increasingly expensive and will eventually be unavailable.</p>
        
        <p>Investing in a new, energy-efficient AC unit can provide better comfort, lower energy bills, and peace of mind. Contact HVAC Doctors for a free consultation to discuss your replacement options.</p>
      `,
      thumbnail: "ac-replacement.jpg",
      keywords: ["air conditioning", "replacement", "energy efficiency"],
    },
    {
      title: "Improving Indoor Air Quality",
      slug: "improving-indoor-air-quality",
      date: "April 2, 2025",
      excerpt: "Simple steps to improve the air quality in your home for better health and comfort.",
      content: `
        <p>Indoor air quality (IAQ) affects your health, comfort, and well-being. Poor IAQ can cause or contribute to the development of infections, lung cancer, and chronic lung diseases such as asthma. Here's how to improve the air you breathe at home:</p>
        
        <h2>Change Air Filters Regularly</h2>
        <p>HVAC filters trap dust, pollen, and other airborne particles. Replace standard filters every 1-3 months, or more frequently if you have pets or allergies.</p>
        
        <h2>Consider Air Purifiers</h2>
        <p>High-efficiency air purifiers can remove microscopic pollutants that standard HVAC filters miss. Look for models with HEPA filters for the best results.</p>
        
        <h2>Control Humidity</h2>
        <p>Maintain indoor humidity between 30-50%. Too much humidity promotes mold and dust mite growth, while too little can irritate your respiratory system. Use dehumidifiers in damp areas and humidifiers in dry seasons.</p>
        
        <h2>Improve Ventilation</h2>
        <p>Open windows when weather permits to bring in fresh air. Use exhaust fans in kitchens and bathrooms to remove moisture and pollutants. Consider a whole-house ventilation system if your home is tightly sealed.</p>
        
        <h2>Regular Duct Cleaning</h2>
        <p>Have your air ducts professionally cleaned every 3-5 years to remove accumulated dust, pollen, and other contaminants that can be circulated throughout your home.</p>
        
        <h2>Use Low-VOC Products</h2>
        <p>Choose paints, cleaning supplies, and furnishings that emit fewer volatile organic compounds (VOCs), which can cause respiratory irritation and other health issues.</p>
        
        <p>Improving your indoor air quality is an investment in your family's health. For a comprehensive IAQ assessment, contact HVAC Doctors to learn about our air quality solutions.</p>
      `,
      thumbnail: "indoor-air-quality.jpg",
      keywords: ["air quality", "health", "HVAC", "filters"],
    },
  ]
  
  export function getAllBlogPosts(): BlogPost[] {
    return blogPosts
  }
  
  export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug)
  }
  
  export function getBlogPostsByKeyword(keyword: string): BlogPost[] {
    return blogPosts.filter((post) => post.keywords.includes(keyword))
  }
  