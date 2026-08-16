const vehiclesData = [
  // ───── FEATURED / LUXURY (Original 6 from frontend) ─────
  {
    brand: 'Audi', model: 'Q8 Black Edition', variant: 'Black Edition', year: 2024,
    price: 4250000, finance_monthly: 47000, finance_note: 'Finance from EGP 47,000/mo',
    mileage: 'N/A', transmission: '8-Speed Automatic', engine: '3.0L V6 TFSI', power: '340 HP',
    color: 'Black Out', status: 'available', badge: 'Exclusive Fleet', category: 'suv',
    description: 'Experience the alignment of coupe elegance and commanding SUV presence.',
    specs: [{label:'Powertrain',value:'3.0L V6 TFSI'},{label:'Output',value:'340 HP'},{label:'Acceleration',value:'5.9 s (0-100)'},{label:'Showroom Capture',value:'7.jpeg & 8.jpeg'}],
    image: '8.jpeg', gallery: '7.jpeg,8.jpeg', featured: 1
  },
  {
    brand: 'Mercedes-Benz', model: 'Class S 580 L', variant: 'Luxury Package', year: 2024,
    price: 5900000, finance_monthly: 65500, finance_note: 'Finance from EGP 65,500/mo',
    mileage: 'N/A', transmission: '9G-Tronic', engine: '4.0L V8 Biturbo', power: '496 HP',
    color: 'Diamond White', status: 'available', badge: 'Available', category: 'sedan',
    description: 'The pinnacle of Mercedes-Benz luxury sedan engineering with handcrafted AMG power.',
    specs: [{label:'Trim',value:'Exclusive'},{label:'Lighting',value:'LED Matrix'},{label:'Status',value:'Showroom'}],
    image: '5.jpeg', gallery: '5.jpeg', featured: 0
  },
  {
    brand: 'Mercedes-Benz', model: 'Coupe', variant: 'Bespoke Aerodynamics', year: 2024,
    price: 5400000, finance_monthly: 60000, finance_note: 'Finance from EGP 60,000/mo',
    mileage: 'N/A', transmission: '9G-Tronic', engine: '4.0L V8 Biturbo', power: '621 HP',
    color: 'Showroom Mint', status: 'available', badge: 'Available', category: 'suv',
    description: 'A luxury coupe with bespoke aerodynamics and premium appointments.',
    specs: [{label:'Engine',value:'Biturbo'},{label:'Wheels',value:'Premium'},{label:'Stance',value:'Bespoke'}],
    image: '6.jpeg', gallery: '6.jpeg', featured: 0
  },
  {
    brand: 'BMW', model: 'M Performance', variant: 'M Performance TwinPower', year: 2024,
    price: 4800000, finance_monthly: 53500, finance_note: 'Finance from EGP 53,500/mo',
    mileage: 'N/A', transmission: '8-Speed M Steptronic', engine: '3.0L Inline-6', power: '503 HP',
    color: 'São Paulo Yellow', status: 'new_arrival', badge: 'New Arrival', category: 'sports',
    description: 'M Performance TwinPower with São Paulo Yellow finish and track-tuned suspension.',
    specs: [{label:'Headlights',value:'Laser'},{label:'Rims',value:'Competition'},{label:'Tuned',value:'Track'}],
    image: '4.jpeg', gallery: '4.jpeg', featured: 0
  },
  {
    brand: 'Bentley', model: 'Continental GT', variant: 'Mulliner Specifications', year: 2024,
    price: 8200000, finance_monthly: 91000, finance_note: 'Finance from EGP 91,000/mo',
    mileage: 'N/A', transmission: '8-Speed Automatic', engine: 'V8 / W12', power: '542 HP (V8)',
    color: 'Magnetic Gray', status: 'available', badge: 'Available', category: 'sports',
    description: 'Bentley Continental GT with Mulliner specifications and open-top gran tourer capability.',
    specs: [{label:'Power',value:'V8/W12'},{label:'Calipers',value:'Red Gloss'},{label:'Gran Tourer',value:'Open Top'}],
    image: '1.jpeg', gallery: '1.jpeg', featured: 0
  },
  {
    brand: 'Scuderia', model: 'Performance', variant: 'Aerodynamic Matrix', year: 2025,
    price: 14500000, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: 'N/A', transmission: '7-Speed DCT', engine: 'V12 Hybrid', power: '819 HP',
    color: 'Rosso Corsa Flame', status: 'pre_order', badge: 'Ultra Luxury', category: 'sports',
    description: 'Ultra-luxury hypercar with aerodynamic matrix design and exotic exhaust.',
    specs: [{label:'LEDs',value:'Circular'},{label:'Diffuser',value:'Carbon'},{label:'Exhaust',value:'Exotic'}],
    image: '2.jpeg', gallery: '2.jpeg,3.jpeg', featured: 0
  },

  // ───── SEDANS & COMPACT CARS ─────
  {
    brand: 'Toyota', model: 'Corolla', variant: '1.6L Elegance CVT', year: 2026,
    price: 1760000, finance_monthly: 19500,
    mileage: '0 km', transmission: 'CVT', engine: '1.6L', power: '122 HP',
    color: 'Super White', status: 'available', badge: 'Available', category: 'sedan',
    description: 'The iconic Toyota Corolla with proven reliability and modern tech.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'1.6L'},{label:'Fuel',value:'Gasoline'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Toyota+Corolla',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Toyota+Corolla', featured: 0
  },
  {
    brand: 'Toyota', model: 'Yaris', variant: '1.0L G CVT', year: 2026,
    price: 909550, finance_monthly: 10100,
    mileage: '0 km', transmission: 'CVT', engine: '1.0L', power: '72 HP',
    color: 'Celestial Blue', status: 'available', badge: 'Best Seller', category: 'sedan',
    description: 'Toyota Yaris - efficient, practical, and fuel-efficient urban mobility.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'1.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Toyota+Yaris',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Toyota+Yaris', featured: 0
  },
  {
    brand: 'Nissan', model: 'Sunny', variant: '1.5L S', year: 2026,
    price: 850000, finance_monthly: 9400,
    mileage: '0 km', transmission: 'Manual', engine: '1.5L', power: '106 HP',
    color: 'Scarlet Ember', status: 'available', badge: 'Value', category: 'sedan',
    description: 'Nissan Sunny - affordable, reliable, and well-equipped for daily driving.',
    specs: [{label:'Transmission',value:'Manual'},{label:'Engine',value:'1.5L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Nissan+Sunny',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Nissan+Sunny', featured: 0
  },
  {
    brand: 'Hyundai', model: 'Elantra', variant: '1.5L GLS CVT', year: 2026,
    price: 1200000, finance_monthly: 13300,
    mileage: '0 km', transmission: 'CVT', engine: '1.5L', power: '128 HP',
    color: 'Fiery Red', status: 'available', badge: 'Available', category: 'sedan',
    description: 'Hyundai Elantra with sporty design and advanced safety features.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'1.5L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Hyundai+Elantra',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Hyundai+Elantra', featured: 0
  },
  {
    brand: 'Kia', model: 'K3', variant: '1.6L LX', year: 2026,
    price: 1100000, finance_monthly: 12200,
    mileage: '0 km', transmission: 'CVT', engine: '1.6L', power: '123 HP',
    color: 'Gravity Grey', status: 'available', badge: 'Available', category: 'sedan',
    description: 'Kia K3 - premium sedan with cutting-edge technology.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'1.6L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Kia+K3',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Kia+K3', featured: 0
  },
  {
    brand: 'Honda', model: 'Civic', variant: '1.5L VTurbo', year: 2026,
    price: 950000, finance_monthly: 10600,
    mileage: '0 km', transmission: 'CVT', engine: '1.5L Turbo', power: '180 HP',
    color: 'Rally Red', status: 'available', badge: 'Sport', category: 'sedan',
    description: 'Honda Civic with turbocharged performance and premium interior.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'1.5L Turbo'},{label:'Power',value:'180 HP'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Honda+Civic',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Honda+Civic', featured: 0
  },
  {
    brand: 'Honda', model: 'Accord', variant: '2.0L VTec', year: 2026,
    price: 1450000, finance_monthly: 16100,
    mileage: '0 km', transmission: 'CVT', engine: '2.0L', power: '252 HP',
    color: 'Modern Steel', status: 'available', badge: 'Available', category: 'sedan',
    description: 'Honda Accord - the sedan that redefines sophistication and performance.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'2.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Honda+Accord',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Honda+Accord', featured: 0
  },
  {
    brand: 'Mazda', model: '6', variant: '2.0L Grand Select', year: 2026,
    price: 1150000, finance_monthly: 12800,
    mileage: '0 km', transmission: '6-Speed Auto', engine: '2.0L', power: '155 HP',
    color: 'Soul Red', status: 'available', badge: 'KODO', category: 'sedan',
    description: 'Mazda 6 with KODO design philosophy and premium Skyactiv technology.',
    specs: [{label:'Transmission',value:'6-Speed Auto'},{label:'Engine',value:'2.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mazda+6',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mazda+6', featured: 0
  },
  {
    brand: 'Volkswagen', model: 'Passat', variant: '1.5 TSI', year: 2026,
    price: 1350000, finance_monthly: 15000,
    mileage: '0 km', transmission: '6-Speed DSG', engine: '1.5L TSI', power: '180 HP',
    color: 'Deep Black', status: 'available', badge: 'Available', category: 'sedan',
    description: 'VW Passat with German engineering and refined driving dynamics.',
    specs: [{label:'Transmission',value:'6-Speed DSG'},{label:'Engine',value:'1.5L TSI'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Volkswagen+Passat',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Volkswagen+Passat', featured: 0
  },
  {
    brand: 'Skoda', model: 'Octavia', variant: '1.5 TSI', year: 2026,
    price: 1050000, finance_monthly: 11700,
    mileage: '0 km', transmission: 'DSG', engine: '1.5L TSI', power: '150 HP',
    color: 'Silver', status: 'available', badge: 'Available', category: 'sedan',
    description: 'Skoda Octavia - spacious, practical, and elegantly designed.',
    specs: [{label:'Transmission',value:'DSG'},{label:'Engine',value:'1.5L TSI'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Skoda+Octavia',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Skoda+Octavia', featured: 0
  },
  {
    brand: 'Geely', model: 'Emgrand', variant: '1.5L CVT', year: 2026,
    price: 699900, finance_monthly: 7800,
    mileage: '0 km', transmission: 'CVT', engine: '1.5L', power: '175 HP',
    color: 'Crimson Red', status: 'available', badge: 'Best Value', category: 'sedan',
    description: 'Geely Emgrand with premium design and smart connected features.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'1.5L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Geely+Emgrand',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Geely+Emgrand', featured: 0
  },
  {
    brand: 'Lada', model: 'Granta', variant: '1.6L', year: 2025,
    price: 285000, finance_monthly: 0, finance_note: 'Cash purchase recommended',
    mileage: '0 km', transmission: 'Manual', engine: '1.6L', power: '104 HP',
    color: 'White', status: 'available', badge: 'Most Affordable', category: 'sedan',
    description: 'Lada Granta - reliable and affordable entry-level sedan.',
    specs: [{label:'Transmission',value:'Manual'},{label:'Engine',value:'1.6L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Lada+Granta',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Lada+Granta', featured: 0
  },
  {
    brand: 'Chevrolet', model: 'Optra', variant: '1.5L LT', year: 2026,
    price: 805000, finance_monthly: 8900,
    mileage: '0 km', transmission: 'Automatic', engine: '1.5L', power: '122 HP',
    color: 'Red', status: 'available', badge: 'Available', category: 'sedan',
    description: 'Chevrolet Optra with modern features and reliable performance.',
    specs: [{label:'Transmission',value:'Automatic'},{label:'Engine',value:'1.5L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Chevrolet+Optra',
     gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Chevrolet+Optra', featured: 0
  },

  // ───── SUVS & CROSSOVERS ─────
  {
    brand: 'Toyota', model: 'Fortuner', variant: '2.7L Sport', year: 2026,
    price: 3400000, finance_monthly: 37800,
    mileage: '0 km', transmission: '6-Speed Auto', engine: '2.7L', power: '166 HP',
    color: 'Attitude Black', status: 'available', badge: 'Popular', category: 'suv',
    description: 'Toyota Fortuner - the SUV that conquered the Egyptian market.',
    specs: [{label:'Transmission',value:'6-Speed Auto'},{label:'Engine',value:'2.7L'},{label:'4WD',value:'Available'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Toyota+Fortuner',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Toyota+Fortuner', featured: 0
  },
  {
    brand: 'Toyota', model: 'C-HR', variant: '1.8L Hybrid', year: 2026,
    price: 2250000, finance_monthly: 25000,
    mileage: '0 km', transmission: 'E-CVT', engine: '1.8L Hybrid', power: '122 HP',
    color: 'Galactic Grey', status: 'available', badge: 'Hybrid', category: 'suv',
    description: 'Toyota C-HR with distinctive coupe-inspired SUV design.',
    specs: [{label:'Transmission',value:'E-CVT'},{label:'Engine',value:'1.8L Hybrid'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Toyota+C-HR',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Toyota+C-HR', featured: 0
  },
  {
    brand: 'Nissan', model: 'X-Trail', variant: '2.0L AWD', year: 2026,
    price: 2500000, finance_monthly: 27800,
    mileage: '0 km', transmission: 'CVT', engine: '2.0L', power: '144 HP',
    color: 'Scarlet Tint', status: 'available', badge: 'Available', category: 'suv',
    description: 'Nissan X-Trail with advanced ALL MODE 4WD system.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'2.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Nissan+X-Trail',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Nissan+X-Trail', featured: 0
  },
  {
    brand: 'Nissan', model: 'Kicks', variant: '1.6L S', year: 2026,
    price: 1550000, finance_monthly: 17200,
    mileage: '0 km', transmission: 'CVT', engine: '1.6L', power: '116 HP',
    color: 'Vermillion Shadow', status: 'available', badge: 'Value SUV', category: 'suv',
    description: 'Nissan Kicks - compact SUV with excellent fuel efficiency.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'1.6L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Nissan+Kicks',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Nissan+Kicks', featured: 0
  },
  {
    brand: 'Hyundai', model: 'Tucson', variant: '2.0L Sport', year: 2026,
    price: 1950000, finance_monthly: 21700,
    mileage: '0 km', transmission: '6-Speed DCT', engine: '2.0L', power: '177 HP',
    color: 'Amazon Gray', status: 'available', badge: 'Best Seller', category: 'suv',
    description: 'Hyundai Tucson 2026 with enhanced safety and smart tech.',
    specs: [{label:'Transmission',value:'6-Speed DCT'},{label:'Engine',value:'2.0L'}],
     image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Hyundai+Tucson',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Hyundai+Tucson', featured: 0
  },
  {
    brand: 'Kia', model: 'Sportage', variant: '2.0L GT-Line', year: 2026,
    price: 1800000, finance_monthly: 20000,
    mileage: '0 km', transmission: '6-Speed DCT', engine: '2.0L', power: '177 HP',
    color: 'Perseus Gray', status: 'available', badge: 'Available', category: 'suv',
    description: 'Kia Sportage with modern design and advanced driver assistance.',
    specs: [{label:'Transmission',value:'6-Speed DCT'},{label:'Engine',value:'2.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Kia+Sportage',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Kia+Sportage', featured: 0
  },
  {
    brand: 'Mazda', model: 'CX-5', variant: '2.0L Skyactiv', year: 2026,
    price: 1450000, finance_monthly: 16100,
    mileage: '0 km', transmission: '6-Speed Auto', engine: '2.0L', power: '155 HP',
    color: 'Soul Red', status: 'available', badge: 'KODO', category: 'suv',
    description: 'Mazda CX-5 with signature KODO design and premium interior.',
    specs: [{label:'Transmission',value:'6-Speed Auto'},{label:'Engine',value:'2.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mazda+CX-5',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mazda+CX-5', featured: 0
  },
  {
    brand: 'Mitsubishi', model: 'Outlander', variant: '2.4L AWC', year: 2026,
    price: 2100000, finance_monthly: 23300,
    mileage: '0 km', transmission: 'CVT', engine: '2.4L', power: '166 HP',
    color: 'Diamond Red', status: 'available', badge: '7-seater', category: 'suv',
    description: 'Mitsubishi Outlander with spacious 7-seat configuration.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'2.4L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mitsubishi+Outlander',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mitsubishi+Outlander', featured: 0
  },
  {
    brand: 'MG', model: 'ZS', variant: '1.5T Comfort', year: 2025,
    price: 790000, finance_monthly: 8800,
    mileage: '0 km', transmission: '7-Speed DCT', engine: '1.5L Turbo', power: '184 HP',
    color: 'Arctic White', status: 'available', badge: 'Best Value SUV', category: 'suv',
    description: 'MG ZS with turbocharged engine and smart connectivity.',
    specs: [{label:'Transmission',value:'7-Speed DCT'},{label:'Engine',value:'1.5L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=MG+ZS',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=MG+ZS', featured: 0
  },
  {
    brand: 'Changan', model: 'CS35 PLUS', variant: '1.5T Elite', year: 2026,
    price: 950000, finance_monthly: 10600,
    mileage: '0 km', transmission: '7-Speed DCT', engine: '1.5L Turbo', power: '150 HP',
    color: 'Deep Sky Blue', status: 'available', badge: 'New Arrival', category: 'suv',
    description: 'Changan CS35 PLUS with modern design and competitive pricing.',
    specs: [{label:'Transmission',value:'7-Speed DCT'},{label:'Engine',value:'1.5L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Changan+CS35+PLUS',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Changan+CS35+PLUS', featured: 0
  },
  {
    brand: 'Chery', model: 'Tiggo 7 Plus', variant: '1.5T', year: 2026,
    price: 1200000, finance_monthly: 13300,
    mileage: '0 km', transmission: '7-Speed DCT', engine: '1.5L Turbo', power: '156 HP',
    color: 'Starry Night', status: 'available', badge: 'Available', category: 'suv',
    description: 'Chery Tiggo 7 Plus - spacious 7-seater SUV with advanced tech.',
    specs: [{label:'Transmission',value:'7-Speed DCT'},{label:'Engine',value:'1.5L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Chery+Tiggo+7+Plus',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Chery+Tiggo+7+Plus', featured: 0
  },
  {
    brand: 'Jetour', model: 'Traveler', variant: '2.0T', year: 2026,
    price: 1100000, finance_monthly: 12200,
    mileage: '0 km', transmission: '7-Speed DCT', engine: '2.0L Turbo', power: '251 HP',
    color: 'Phantom Green', status: 'available', badge: 'Off-road', category: 'suv',
    description: 'Jetour Traveler with rugged off-road capability and modern luxury.',
    specs: [{label:'Transmission',value:'7-Speed DCT'},{label:'Engine',value:'2.0L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Jetour+Traveler',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Jetour+Traveler', featured: 0
  },
  {
    brand: 'Geely', model: 'Boyue', variant: '1.5T', year: 2026,
    price: 1350000, finance_monthly: 15000,
    mileage: '0 km', transmission: '7-Speed DCT', engine: '1.5L Turbo', power: '177 HP',
    color: 'Ceramic White', status: 'available', badge: 'Available', category: 'suv',
    description: 'Geely Boyue with sleek design and smart connectivity.',
    specs: [{label:'Transmission',value:'7-Speed DCT'},{label:'Engine',value:'1.5L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Geely+Boyue',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Geely+Boyue', featured: 0
  },
  {
    brand: 'Volkswagen', model: 'Tiguan', variant: '1.5 TSI R-Line', year: 2026,
    price: 1500000, finance_monthly: 16700,
    mileage: '0 km', transmission: '7-Speed DSG', engine: '1.5L TSI', power: '190 HP',
    color: 'Pure White', status: 'available', badge: 'Available', category: 'suv',
    description: 'VW Tiguan with German engineering and premium comfort.',
    specs: [{label:'Transmission',value:'7-Speed DSG'},{label:'Engine',value:'1.5L TSI'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Volkswagen+Tiguan',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Volkswagen+Tiguan', featured: 0
  },
  {
    brand: 'Subaru', model: 'Forester', variant: '2.0L Symmetrical AWD', year: 2026,
    price: 1650000, finance_monthly: 18300,
    mileage: '0 km', transmission: 'CVT', engine: '2.0L', power: '152 HP',
    color: 'Crystal Black', status: 'available', badge: 'AWD', category: 'suv',
    description: 'Subaru Forester with Symmetrical AWD and exceptional safety ratings.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'2.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Subaru+Forester',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Subaru+Forester', featured: 0
  },
  {
    brand: 'Skoda', model: 'Kodiaq', variant: '2.0L SportLine', year: 2026,
    price: 1550000, finance_monthly: 17200,
    mileage: '0 km', transmission: 'DSG', engine: '2.0L', power: '190 HP',
    color: 'Jupiter Orange', status: 'available', badge: '7-seater', category: 'suv',
    description: 'Skoda Kodiaq - spacious 7-seat SUV with premium features.',
    specs: [{label:'Transmission',value:'DSG'},{label:'Engine',value:'2.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Skoda+Kodiaq',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Skoda+Kodiaq', featured: 0
  },

  // ───── LUXURY SEDANS ─────
  {
    brand: 'Mercedes-Benz', model: 'C-Class', variant: 'C 200 AMG', year: 2026,
    price: 4350000, finance_monthly: 48300,
    mileage: '0 km', transmission: '9G-Tronic', engine: '2.0L Turbo', power: '203 HP',
    color: 'Caviar Black', status: 'available', badge: 'AMG Line', category: 'sedan',
    description: 'Mercedes C-Class with AMG styling and luxury appointments.',
    specs: [{label:'Transmission',value:'9G-Tronic'},{label:'Engine',value:'2.0L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+C-Class',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+C-Class', featured: 0
  },
  {
    brand: 'Mercedes-Benz', model: 'A-Class', variant: 'A 200', year: 2026,
    price: 2900000, finance_monthly: 32200,
    mileage: '0 km', transmission: '7G-DCT', engine: '2.0L Turbo', power: '163 HP',
    color: 'Alpine Grey', status: 'available', badge: 'Available', category: 'sedan',
    description: 'Mercedes A-Class - entry into Mercedes-Benz luxury.',
    specs: [{label:'Transmission',value:'7G-DCT'},{label:'Engine',value:'2.0L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+A-Class',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+A-Class', featured: 0
  },
  {
    brand: 'Mercedes-Benz', model: 'CLA 200', variant: '4MATIC', year: 2026,
    price: 2750000, finance_monthly: 30500,
    mileage: '0 km', transmission: '7G-DCT', engine: '2.0L Turbo', power: '163 HP',
    color: 'Sahara Silver', status: 'available', badge: 'Coupe', category: 'sedan',
    description: 'Mercedes CLA 200 with coupe silhouette and 4MATIC traction.',
    specs: [{label:'Transmission',value:'7G-DCT'},{label:'Engine',value:'2.0L Turbo'},{label:'AWD',value:'4MATIK'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+CLA+200',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+CLA+200', featured: 0
  },
  {
    brand: 'BMW', model: '320', variant: 'Luxury Line', year: 2026,
    price: 1950000, finance_monthly: 21700,
    mileage: '0 km', transmission: '8-Speed Steptronic', engine: '2.0L', power: '190 HP',
    color: 'Alpine White', status: 'available', badge: 'Available', category: 'sedan',
    description: 'BMW 320 with iconic kidney grille and premium interior.',
    specs: [{label:'Transmission',value:'8-Speed'},{label:'Engine',value:'2.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+320',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+320', featured: 0
  },
  {
    brand: 'BMW', model: '530', variant: 'Luxury Package', year: 2026,
    price: 3650000, finance_monthly: 40600,
    mileage: '0 km', transmission: '8-Speed Steptronic', engine: '2.0L Turbo', power: '252 HP',
    color: 'Carbon Black', status: 'available', badge: 'Available', category: 'sedan',
    description: 'BMW 530 with executive comfort and advanced technology.',
    specs: [{label:'Transmission',value:'8-Speed'},{label:'Engine',value:'2.0L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+530',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+530', featured: 0
  },
  {
    brand: 'Audi', model: 'A4', variant: '40 TFSI', year: 2026,
    price: 2850000, finance_monthly: 31700,
    mileage: '0 km', transmission: '7-Speed S Tronic', engine: '2.0L TFSI', power: '190 HP',
    color: 'Floret Silver', status: 'available', badge: 'Quattro', category: 'sedan',
    description: 'Audi A4 with quattro all-wheel drive and virtual cockpit.',
    specs: [{label:'Transmission',value:'7-Speed S Tronic'},{label:'Engine',value:'2.0L TFSI'},{label:'AWD',value:'Quattro'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Audi+A4',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Audi+A4', featured: 0
  },
  {
    brand: 'Audi', model: 'A6', variant: '45 TFSI', year: 2026,
    price: 4200000, finance_monthly: 46700,
    mileage: '0 km', transmission: '7-Speed S Tronic', engine: '2.0L TFSI', power: '261 HP',
    color: 'Mythossilver', status: 'available', badge: 'Available', category: 'sedan',
    description: 'Audi A6 - luxury sedan with advanced assistance systems.',
    specs: [{label:'Transmission',value:'7-Speed S Tronic'},{label:'Engine',value:'2.0L TFSI'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Audi+A6',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Audi+A6', featured: 0
  },
  {
    brand: 'BMW', model: '540i', variant: 'M Sport', year: 2026,
    price: 5250000, finance_monthly: 58300,
    mileage: '0 km', transmission: '8-Speed Steptronic', engine: '3.0L Turbo', power: '335 HP',
    color: 'Carbon Black', status: 'available', badge: 'M Sport', category: 'sedan',
    description: 'BMW 540i with M Sport package and powerful inline-6 engine.',
    specs: [{label:'Transmission',value:'8-Speed'},{label:'Engine',value:'3.0L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+540i',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+540i', featured: 0
  },

  // ───── LUXURY SUVS ─────
  {
    brand: 'Mercedes-Benz', model: 'GLE 450', variant: '4MATIC', year: 2026,
    price: 7090000, finance_monthly: 78800,
    mileage: '0 km', transmission: '9G-Tronic', engine: '3.0L Turbo', power: '362 HP',
    color: 'Obsidian Black', status: 'available', badge: 'AMG Line', category: 'suv',
    description: 'Mercedes GLE 450 with 4MATIC and AMG styling package.',
    specs: [{label:'Transmission',value:'9G-Tronic'},{label:'Engine',value:'3.0L Turbo'},{label:'AWD',value:'4MATIC'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+GLE+450',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+GLE+450', featured: 0
  },
  {
    brand: 'BMW', model: 'X5', variant: 'xDrive40i', year: 2026,
    price: 7300000, finance_monthly: 81100,
    mileage: '0 km', transmission: '8-Speed Steptronic', engine: '3.0L Turbo', power: '335 HP',
    color: 'Alpine White', status: 'available', badge: 'xLine', category: 'suv',
    description: 'BMW X5 xDrive40i with xLine off-road package.',
    specs: [{label:'Transmission',value:'8-Speed'},{label:'Engine',value:'3.0L Turbo'},{label:'AWD',value:'xDrive'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+X5',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+X5', featured: 0
  },
  {
    brand: 'Audi', model: 'Q7', variant: '55 TFSI', year: 2026,
    price: 6800000, finance_monthly: 75600,
    mileage: '0 km', transmission: '8-Speed Tiptronic', engine: '3.0L TFSI', power: '335 HP',
    color: 'Galaxy Grey', status: 'available', badge: 'Quattro', category: 'suv',
    description: 'Audi Q7 with quattro and luxury seating for 7.',
    specs: [{label:'Transmission',value:'8-Speed'},{label:'Engine',value:'3.0L TFSI'},{label:'AWD',value:'Quattro'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Audi+Q7',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Audi+Q7', featured: 0
  },
  {
    brand: 'Porsche', model: 'Cayenne', variant: 'Base', year: 2026,
    price: 8100000, finance_monthly: 90000,
    mileage: '0 km', transmission: '8-Speed PDK', engine: '3.0L Turbo', power: '349 HP',
    color: 'Night Blue', status: 'available', badge: 'Sport Chrono', category: 'suv',
    description: 'Porsche Cayenne - the SUV that handles like a sports car.',
    specs: [{label:'Transmission',value:'8-Speed PDK'},{label:'Engine',value:'3.0L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Porsche+Cayenne',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Porsche+Cayenne', featured: 0
  },
  {
    brand: 'Volvo', model: 'XC90', variant: 'Momentum', year: 2026,
    price: 6950000, finance_monthly: 77200,
    mileage: '0 km', transmission: '8-Speed', engine: '2.0L Turbo Hybrid', power: '295 HP',
    color: 'Crystal White', status: 'available', badge: '7-seater', category: 'suv',
    description: 'Volvo XC90 with mild hybrid technology and premium safety.',
    specs: [{label:'Transmission',value:'8-Speed'},{label:'Engine',value:'2.0L Turbo Hybrid'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Volvo+XC90',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Volvo+XC90', featured: 0
  },
  {
    brand: 'Land Rover', model: 'Range Rover', variant: 'PHEV', year: 2026,
    price: 8750000, finance_monthly: 97200,
    mileage: '0 km', transmission: '8-Speed', engine: '2.0L Turbo Hybrid', power: '398 HP',
    color: 'Santorini Black', status: 'available', badge: 'Luxury', category: 'suv',
    description: 'Range Rover with PHEV powertrain and exceptional off-road capability.',
    specs: [{label:'Transmission',value:'8-Speed'},{label:'Engine',value:'2.0L PHEV'},{label:'AWD',value:'Permanent'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Land+Rover+Range+Rover',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Land+Rover+Range+Rover', featured: 0
  },

  // ───── SPORTS & EXOTIC ─────
  {
    brand: 'BMW', model: 'M3', variant: 'Competition xDrive', year: 2026,
    price: 11450000, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: '0 km', transmission: '8-Speed', engine: '3.0L TwinTurbo', power: '503 HP',
    color: 'Isle of Man Green', status: 'pre_order', badge: 'M Division', category: 'sports',
    description: 'BMW M3 Competition with xDrive and M Carbon Package.',
    specs: [{label:'Transmission',value:'8-Speed'},{label:'Engine',value:'3.0L TwinTurbo'},{label:'Power',value:'503 HP'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+M3',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+M3', featured: 0
  },
  {
    brand: 'BMW', model: 'M4', variant: 'Competition Coupé', year: 2026,
    price: 11550000, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: '0 km', transmission: '6-Speed Manual', engine: '3.0L TwinTurbo', power: '473 HP',
    color: 'Toronto Red', status: 'pre_order', badge: 'M Division', category: 'sports',
    description: 'BMW M4 Competition - the ultimate driving machine in coupé form.',
    specs: [{label:'Transmission',value:'6-Speed Manual'},{label:'Engine',value:'3.0L TwinTurbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+M4',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+M4', featured: 0
  },
  {
    brand: 'BMW', model: 'M5', variant: 'Competition', year: 2026,
    price: 13850000, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: '0 km', transmission: '8-Speed', engine: '4.4L TwinTurbo V8', power: '617 HP',
    color: 'Carbon Black', status: 'pre_order', badge: 'Super Sedan', category: 'sports',
    description: 'BMW M5 Competition - the ultimate super sedan.',
    specs: [{label:'Transmission',value:'8-Speed'},{label:'Engine',value:'4.4L V8 TwinTurbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+M5',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+M5', featured: 0
  },
  {
    brand: 'BMW', model: 'iX', variant: 'xDrive50', year: 2026,
    price: 7700000, finance_monthly: 85600,
    mileage: '0 km', transmission: 'Single-Speed', engine: 'Electric', power: '500 HP',
    color: 'Black', status: 'available', badge: 'Electric SUV', category: 'suv',
    description: 'BMW iX all-electric SUV with iDrive 8 and advanced eDrive.',
    specs: [{label:'Transmission',value:'Single-Speed'},{label:'Engine',value:'Electric'},{label:'Range',value:'500 km'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+iX',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+iX', featured: 0
  },
  {
    brand: 'BMW', model: 'i7', variant: 'xDrive60', year: 2026,
    price: 11000000, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: '0 km', transmission: 'Single-Speed', engine: 'Electric', power: '536 HP',
    color: 'Cognac', status: 'pre_order', badge: 'Electric Sedan', category: 'sedan',
    description: 'BMW i7 xDrive60 - all-electric luxury sedan with iconic kidney grille.',
    specs: [{label:'Transmission',value:'Single-Speed'},{label:'Engine',value:'Electric'},{label:'Range',value:'625 km'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+i7',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BMW+i7', featured: 0
  },
  {
    brand: 'Porsche', model: '911 Targa', variant: '3.0', year: 2026,
    price: 6858750, finance_monthly: 76200,
    mileage: '0 km', transmission: '8-Speed PDK', engine: '3.0L Turbo', power: '379 HP',
    color: 'Guards Red', status: 'available', badge: 'Iconic', category: 'sports',
    description: 'Porsche 911 Targa with iconic wraparound rear window.',
    specs: [{label:'Transmission',value:'8-Speed PDK'},{label:'Engine',value:'3.0L Turbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Porsche+911+Targa',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Porsche+911+Targa', featured: 0
  },
  {
    brand: 'Porsche', model: 'Panamera', variant: 'Turbo S', year: 2026,
    price: 10428250, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: '0 km', transmission: '8-Speed PDK', engine: '4.0L TwinTurbo V8', power: '640 HP',
    color: 'Night Blue', status: 'pre_order', badge: 'Supercar', category: 'sports',
    description: 'Porsche Panamera Turbo S - the ultimate four-seater supercar.',
    specs: [{label:'Transmission',value:'8-Speed PDK'},{label:'Engine',value:'4.0L V8 TwinTurbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Porsche+Panamera',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Porsche+Panamera', featured: 0
  },
  {
    brand: 'Mercedes-Benz', model: 'SL55 AMG', variant: 'Roadster', year: 2025,
    price: 14330000, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: '0 km', transmission: '9-Speed', engine: '4.0L V8 Biturbo', power: '577 HP',
    color: 'Obsidian Black', status: 'pre_order', badge: 'AMG', category: 'sports',
    description: 'Mercedes SL55 AMG Roadster - the pinnacle of open-top performance.',
    specs: [{label:'Transmission',value:'9-Speed'},{label:'Engine',value:'4.0L V8 Biturbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+SL55+AMG',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+SL55+AMG', featured: 0
  },
  {
    brand: 'Mercedes-Benz', model: 'AMG GT 63', variant: '4MATIC+', year: 2026,
    price: 17200000, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: '0 km', transmission: '9-Speed', engine: '4.0L V8 Biturbo', power: '577 HP',
    color: 'Sapphire Black', status: 'pre_order', badge: 'AMG', category: 'sports',
    description: 'Mercedes-AMG GT 63 4MATIC+ - four-door coupe supercar.',
    specs: [{label:'Transmission',value:'9-Speed'},{label:'Engine',value:'4.0L V8 Biturbo'},{label:'AWD',value:'4MATIC+'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+AMG+GT+63',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+AMG+GT+63', featured: 0
  },
  {
    brand: 'Mercedes-Benz', model: 'Maybach S 580', variant: '4Matic+', year: 2026,
    price: 17500000, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: '0 km', transmission: '9-Speed', engine: '4.0L V8 Biturbo', power: '550 HP',
    color: 'Obsidian Black', status: 'pre_order', badge: 'Ultra Luxury', category: 'sedan',
    description: 'Mercedes-Maybach S 580 - the pinnacle of automotive luxury.',
    specs: [{label:'Transmission',value:'9-Speed'},{label:'Engine',value:'4.0L V8 Biturbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+Maybach+S+580',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+Maybach+S+580', featured: 0
  },
  {
    brand: 'Mercedes-Benz', model: 'G 500', variant: 'AMG Night', year: 2025,
    price: 13100000, finance_monthly: 0, finance_note: 'Price on Request',
    mileage: '0 km', transmission: '9-Speed', engine: '4.0L V8 Biturbo', power: '585 HP',
    color: 'Obsidian Black', status: 'pre_order', badge: 'Iconic', category: 'suv',
    description: 'Mercedes G 500 AMG Night Edition - the ultimate luxury SUV.',
    specs: [{label:'Transmission',value:'9-Speed'},{label:'Engine',value:'4.0L V8 Biturbo'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+G+500',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Mercedes-Benz+G+500', featured: 0
  },
  {
    brand: 'Nissan', model: 'Z', variant: 'Sport', year: 2025,
    price: 2550000, finance_monthly: 28400,
    mileage: '0 km', transmission: '6-Speed Manual', engine: '3.0L V6 TwinTurbo', power: '401 HP',
    color: 'Racing Yellow', status: 'available', badge: 'Sports Car', category: 'sports',
    description: 'Nissan Z - the legend continues with twin-turbo V6 power.',
    specs: [{label:'Transmission',value:'6-Speed Manual'},{label:'Engine',value:'3.0L V6 TwinTurbo'},{label:'Power',value:'401 HP'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Nissan+Z',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Nissan+Z', featured: 0
  },

  // ───── HATCHBACKS ─────
  {
    brand: 'Suzuki', model: 'Swift', variant: '1.2 GLX', year: 2026,
    price: 750000, finance_monthly: 8300,
    mileage: '0 km', transmission: 'CVT', engine: '1.2L', power: '90 HP',
    color: 'Maritime Blue', status: 'available', badge: 'Best Seller', category: 'hatchback',
    description: 'Suzuki Swift - fun, agile, and fuel-efficient hatchback.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'1.2L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Suzuki+Swift',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Suzuki+Swift', featured: 0
  },
  {
    brand: 'Maruti Suzuki', model: 'Alto K10', variant: '1.0 VXI', year: 2025,
    price: 514000, finance_monthly: 5700,
    mileage: '0 km', transmission: 'Manual', engine: '1.0L', power: '66 HP',
    color: 'Silver', status: 'available', badge: 'Most Affordable', category: 'hatchback',
    description: 'Maruti Suzuki Alto K10 - the most affordable car in Egypt.',
    specs: [{label:'Transmission',value:'Manual'},{label:'Engine',value:'1.0L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Maruti+Suzuki+Alto+K10',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Maruti+Suzuki+Alto+K10', featured: 0
  },
  {
    brand: 'Honda', model: 'City', variant: '1.5 LX', year: 2026,
    price: 1020000, finance_monthly: 11300,
    mileage: '0 km', transmission: 'CVT', engine: '1.5L', power: '120 HP',
    color: 'Platinum White', status: 'available', badge: 'Available', category: 'sedan',
    description: 'Honda City - compact sedan with Honda Sensing safety suite.',
    specs: [{label:'Transmission',value:'CVT'},{label:'Engine',value:'1.5L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Honda+City',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Honda+City', featured: 0
  },
  {
    brand: 'Hyundai', model: 'i20', variant: '1.4 SE', year: 2026,
    price: 920000, finance_monthly: 10200,
    mileage: '0 km', transmission: '6-Speed', engine: '1.4L', power: '100 HP',
    color: 'Marine Blue', status: 'available', badge: 'Available', category: 'hatchback',
    description: 'Hyundai i20 - modern hatchback with excellent value for money.',
    specs: [{label:'Transmission',value:'6-Speed'},{label:'Engine',value:'1.4L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Hyundai+i20',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Hyundai+i20', featured: 0
  },
  {
    brand: 'Kia', model: 'Rio', variant: '1.2 S', year: 2026,
    price: 790000, finance_monthly: 8800,
    mileage: '0 km', transmission: '6-Speed', engine: '1.2L', power: '75 HP',
    color: 'Clear White', status: 'available', badge: 'Economy', category: 'hatchback',
    description: 'Kia Rio - practical and affordable subcompact hatchback.',
    specs: [{label:'Transmission',value:'6-Speed'},{label:'Engine',value:'1.2L'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Kia+Rio',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Kia+Rio', featured: 0
  },

  // ───── ELECTRIC & HYBRID ─────
  {
    brand: 'BYD', model: 'Dolphin', variant: 'Active', year: 2025,
    price: 900000, finance_monthly: 10000,
    mileage: '0 km', transmission: 'Single-Speed', engine: 'Electric', power: '150 HP',
    color: 'Coral Orange', status: 'available', badge: 'Electric', category: 'sedan',
    description: 'BYD Dolphin electric hatchback with 401km range.',
    specs: [{label:'Transmission',value:'Single-Speed'},{label:'Engine',value:'Electric'},{label:'Range',value:'401 km'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BYD+Dolphin',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BYD+Dolphin', featured: 0
  },
  {
    brand: 'BYD', model: 'Qin Plus', variant: 'DM-i', year: 2025,
    price: 1050000, finance_monthly: 11700,
    mileage: '0 km', transmission: 'E-CVT', engine: '1.5L PHEV', power: '211 HP',
    color: 'Starlight Blue', status: 'available', badge: 'Hybrid', category: 'sedan',
    description: 'BYD Qin Plus DM-i with plug-in hybrid technology and 1200km range.',
    specs: [{label:'Transmission',value:'E-CVT'},{label:'Engine',value:'1.5L PHEV'},{label:'Range',value:'1,200 km'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BYD+Qin+Plus',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BYD+Qin+Plus', featured: 0
  },
  {
    brand: 'Chery', model: 'eQ5', variant: 'Electric SUV', year: 2025,
    price: 1100000, finance_monthly: 12200,
    mileage: '0 km', transmission: 'Single-Speed', engine: 'Electric', power: '220 HP',
    color: 'Ice Jade White', status: 'available', badge: 'Electric SUV', category: 'suv',
    description: 'Chery eQ5 electric SUV with advanced driver assistance systems.',
    specs: [{label:'Transmission',value:'Single-Speed'},{label:'Engine',value:'Electric'},{label:'Range',value:'500 km'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Chery+eQ5',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Chery+eQ5', featured: 0
  },
  {
    brand: 'BYD', model: 'Seagull', variant: 'EV', year: 2025,
    price: 680000, finance_monthly: 7600,
    mileage: '0 km', transmission: 'Single-Speed', engine: 'Electric', power: '100 HP',
    color: 'Aurora Blue', status: 'available', badge: 'Affordable EV', category: 'sedan',
    description: 'BYD Seagull - the world\'s most affordable electric sedan.',
    specs: [{label:'Transmission',value:'Single-Speed'},{label:'Engine',value:'Electric'},{label:'Range',value:'405 km'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BYD+Seagull',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=BYD+Seagull', featured: 0
  },
  {
    brand: 'Geely', model: 'Geometry C', variant: 'EV', year: 2025,
    price: 720000, finance_monthly: 8000,
    mileage: '0 km', transmission: 'Single-Speed', engine: 'Electric', power: '228 HP',
    color: 'Polar White', status: 'available', badge: 'Electric', category: 'hatchback',
    description: 'Geely Geometry C electric hatchback with smart connectivity.',
    specs: [{label:'Transmission',value:'Single-Speed'},{label:'Engine',value:'Electric'},{label:'Range',value:'500 km'}],
    image: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Geely+Geometry+C',
    gallery: 'https://placehold.co/800x600/0a0a0f/c8a84c?text=Geely+Geometry+C', featured: 0
  }
];

exports.vehiclesData = vehiclesData;