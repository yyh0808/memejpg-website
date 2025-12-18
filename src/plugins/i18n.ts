import { createI18n } from 'vue-i18n'

// 英文翻译
const en = {
  nav: {
    home: 'Home',
    about: 'About',
    blog: 'Blog',
    slogan: 'Image Tools Made Simple',
    theme: {
      light: 'Light Mode',
      dark: 'Dark Mode',
      auto: 'Auto',
    },
  },
  hero: {
    title: 'Welcome to MemeJPG',
    subtitle: 'Handle all your image editing needs',
    exploreTools: 'Explore Tools',
    newApp: 'New: Mac App Available',
  },
  download: {
    title: 'MemeJPG for Mac',
    chip: {
      silicon: 'Apple Silicon (M1/M2/M3)',
      intel: 'Intel Chip',
    },
    button: {
      dmg: 'Download .dmg',
    },
    designedFor: 'Designed for macOS',
    requires: 'Requires macOS 11.0 or later.',
    otherPlatforms: 'Looking for other platforms?',
    comingSoon: 'Coming Soon',
    history: 'History Versions',
    loading: 'Loading version...',
    latest: 'Latest',
  },
  'tools': {
    sorryCard: {
      name: 'Apology Card',
      description: 'Create heartfelt apology cards for any occasion.',
    },
    greetingCard: {
      name: 'Greeting Card Generator',
      description: 'Generate personalized greeting cards with custom messages.',
    },
    birthdayCard: {
      name: 'Birthday Card Creator',
      description: 'Design fun birthday cards to celebrate their special day.',
    },
    title: 'Our Image Editing Tools',
    backgroundRemover: {
      name: 'Background Remover',
      description:
        'Remove backgrounds from images in batches automatically using advanced AI technology. Perfect for product photos, portraits, and creating transparent images.',
    },
    fontCompressor: {
      name: 'Font Compressor',
      description:
        "Compress font package sizes for better web performance. Reduce loading times and optimize your website's typography without losing quality.",
    },
    imageRenamer: {
      name: 'Image Renamer',
      description:
        'Rename multiple images in batches efficiently with customizable naming patterns. Organize your photo collections with ease.',
    },
    imageResizer: {
      name: 'Image Resizer',
      description:
        'Resize and crop images in batches to specific dimensions. Perfect for social media, web optimization, and maintaining consistent image sizes.',
    },
    imageCompressor: {
      name: 'Image Compressor',
      description:
        'Compress image file sizes in batches without losing quality. Reduce storage space and improve website loading speeds.',
    },
    icoConverter: {
      name: 'ICO Converter',
      description:
        'Convert images to ICO format for favicon creation. Generate high-quality icons for websites and applications.',
    },
    imageBeautifier: {
      name: 'Image Beautifier',
      description:
        'Enhance and beautify multiple images with AI filters. Improve photo quality, adjust colors, and apply professional effects.',
    },
    privateDomainTrafficGenerator: {
      name: 'Private Domain Traffic Image Generator',
      description:
        'Smart text obfuscation to generate detection-resistant images for private domain traffic conversion. Create compelling visuals that bypass content filters.',
    },
    businessCardGenerator: {
      name: 'Business Card Generator',
      description:
        'Create professional business cards with customizable templates and designs. Generate high-quality business cards for networking and professional purposes.',
    },
    qrCodeGenerator: {
      name: 'QR Code Generator',
      description:
        'Generate QR codes for various purposes including URLs, text, contact information, and more. Create customizable QR codes for business and personal use.',
    },
    bookmarkGenerator: {
      name: 'Bookmark Generator',
      description:
        'Create beautiful bookmarks for reading and organization. Design personalized bookmarks with custom text, images, and layouts.',
    },
    invitationGenerator: {
      name: 'Invitation Generator',
      description:
        'Generate elegant invitations for events, parties, and special occasions. Create professional invitations with customizable templates.',
    },
    giftCardGenerator: {
      name: 'Gift Card Generator',
      description:
        'Create attractive gift cards for businesses and personal use. Design custom gift cards with various themes and denominations.',
    },
    serviceCardGenerator: {
      name: 'Service Card Generator',
      description:
        'Generate professional service cards for after-sales support and customer service. Create informative service cards with contact details.',
    },
    membershipCardGenerator: {
      name: 'Membership Card Generator',
      description:
        'Create membership cards for clubs, organizations, and businesses. Design professional membership cards with member information.',
    },
    colorTone: {
      name: 'Color Tone Maker',
      description: 'Extract beautiful color palettes from images or generate new color combinations for your designs.',
    },
    redEnvelope: {
      name: 'Red Envelope Cover Generator',
      description: 'Design custom red envelope covers for special occasions. Create unique and festive digital red envelopes.',
    },
    tryNow: 'Try Now',
    comingSoon: 'Coming Soon',
  },
  features: {
    title: 'Why Choose MemeJPG?',
    fast: {
      title: 'Fast & Efficient',
      description: 'Lightning-fast processing with optimized algorithms for quick results.',
    },
    privacy: {
      title: 'Privacy First',
      description: 'All processing happens in your browser. Your images never leave your device.',
    },
    free: {
      title: 'Free to Use',
      description: 'All our tools are completely free with no hidden costs or subscriptions.',
    },
  },
  footer: {
    copyright: 'MemeJPG - Handle all your image editing needs.',
    friendlyLinks: 'Friendly Links',
  },
  about: {
    title: 'About MemeJPG',
    subtitle:
      'Your one-stop destination for all image editing needs. We provide powerful, free, and privacy-focused tools that work entirely in your browser.',
    mission: {
      title: 'Our Mission',
      description1:
        "At MemeJPG, we believe that powerful image editing tools should be accessible to everyone. Our mission is to provide high-quality, browser-based image processing tools that respect your privacy and don't require any downloads or subscriptions.",
      description2:
        "Whether you're creating memes, optimizing images for the web, or just need quick image edits, we've got you covered with our suite of easy-to-use tools.",
      tagline: 'Simple. Fast. Secure.',
    },
    tools: {
      title: 'Our Tools',
      tryNow: 'Try Now',
      available: 'Available',
      comingSoon: 'Coming Soon',
      features: 'Features:',
    },
    values: {
      title: "Why We're Different",
      privacy: {
        title: 'Privacy First',
        description:
          'All image processing happens locally in your browser. Your images never leave your device.',
      },
      free: {
        title: 'Always Free',
        description:
          'No subscriptions, no hidden fees, no limits. All our tools are completely free to use.',
      },
      noInstall: {
        title: 'No Installation',
        description:
          'Browser-based tools mean no downloads, no installations, and no system requirements.',
      },
    },
    contact: {
      title: 'Get in Touch',
      description:
        "Have questions, suggestions, or want to contribute? We'd love to hear from you!",
      github: 'GitHub',
      email: 'Email Us',
      twitter: 'Twitter',
    },
    toolsDetail: {
      backgroundRemover: {
        name: 'Background Remover',
        description:
          'Automatically remove backgrounds from multiple images in batches using advanced AI technology.',
        features: [
          'Batch processing for multiple images',
          'AI-powered background removal',
          'High-quality transparent PNG output',
          'Support for various image formats',
          'No manual editing required',
        ],
      },
      fontCompressor: {
        name: 'Font Compressor',
        description:
          'Optimize font file sizes for faster web loading while maintaining text quality and readability.',
        features: [
          'Significant file size reduction',
          'Maintains font quality and readability',
          'Support for multiple font formats',
          'Web performance optimization',
          'Batch font processing',
        ],
      },
      imageRenamer: {
        name: 'Image Renamer',
        description:
          'Efficiently rename multiple images at once with customizable naming patterns and rules.',
        features: [
          'Batch renaming for multiple files',
          'Customizable naming patterns',
          'Prefix and suffix options',
          'Sequential numbering',
          'Preview before applying changes',
        ],
      },
      imageResizer: {
        name: 'Image Resizer & Cropper',
        description:
          'Resize and crop multiple images to specific dimensions while maintaining quality and aspect ratios.',
        features: [
          'Batch resizing and cropping',
          'Custom dimension settings',
          'Aspect ratio preservation',
          'Multiple output formats',
          'Quality optimization',
        ],
      },
      imageCompressor: {
        name: 'Image Compressor',
        description:
          'Compress multiple images simultaneously to reduce file sizes without compromising visual quality.',
        features: [
          'Batch compression processing',
          'Lossless and lossy options',
          'Significant size reduction',
          'Quality preservation',
          'Multiple format support',
        ],
      },
      icoConverter: {
        name: 'ICO Converter',
        description:
          'Convert images to ICO format for creating favicons and Windows icons with multiple size variants.',
        features: [
          'Multiple ICO size generation',
          'Favicon creation support',
          'High-quality conversion',
          'Windows icon compatibility',
          'Batch processing capability',
        ],
      },
      imageBeautifier: {
        name: 'Image Beautifier',
        description:
          'Enhance and beautify multiple images using advanced AI filters and enhancement algorithms.',
        features: [
          'AI-powered image enhancement',
          'Batch beautification processing',
          'Multiple filter options',
          'Color correction and optimization',
          'Automatic quality improvement',
          'Brightness and contrast adjustment',
        ],
      },
      privateDomainTrafficGenerator: {
        name: 'Private Domain Traffic Image Generator',
        description:
          'Smart text obfuscation technology to generate detection-resistant images for private domain traffic conversion. Create compelling visuals that bypass content filters.',
        features: [
          'Intelligent text obfuscation algorithms',
          'Detection-resistant image generation',
          'Content filter bypass technology',
          'Private domain traffic optimization',
          'Conversion-focused visual design',
          'Anti-detection pattern generation',
        ],
      },
      businessCardGenerator: {
        name: 'Business Card Generator',
        description:
          'Create professional business cards with customizable templates and designs. Perfect for networking, business meetings, and professional branding.',
        features: [
          'Professional business card templates',
          'Customizable contact information fields',
          'Multiple design themes and colors',
          'High-quality print-ready output',
          'QR code integration for digital cards',
          'Instant preview and download',
        ],
      },
      sorryCard: {
        name: 'Apology Card Generator',
        description:
          'Create heartfelt apology cards for personal and professional situations. Express genuine remorse with beautifully designed cards.',
        features: [
          'Heartfelt apology card templates',
          'Customizable apology messages',
          'Personal and professional themes',
          'Emotional design elements',
          'Multiple card formats available',
          'Easy personalization options',
        ],
      },
      greetingCard: {
        name: 'Greeting Card Generator',
        description:
          'Generate personalized greeting cards for holidays, celebrations, and special occasions. Create memorable cards with custom messages and designs.',
        features: [
          'Holiday and seasonal card templates',
          'Customizable greeting messages',
          'Festive design elements',
          'Multiple occasion categories',
          'Photo integration capabilities',
          'Print and digital sharing options',
        ],
      },
      birthdayCard: {
        name: 'Birthday Card Generator',
        description:
          'Design fun and personalized birthday cards for friends, family, and colleagues. Create unique birthday wishes with custom designs.',
        features: [
          'Age-appropriate birthday themes',
          'Customizable birthday messages',
          'Fun and colorful design elements',
          'Photo upload and integration',
          'Multiple card size options',
          'Instant download and sharing',
        ],
      },
      qrCodeGenerator: {
        name: 'QR Code Generator',
        description:
          'Generate QR codes for various purposes including URLs, text, contact information, WiFi credentials, and more. Create scannable codes for modern digital interactions.',
        features: [
          'Multiple QR code data types',
          'URL, text, and contact QR codes',
          'WiFi and social media QR codes',
          'Customizable design and colors',
          'High-resolution output formats',
          'Batch QR code generation',
        ],
      },
      bookmarkGenerator: {
        name: 'Bookmark Generator',
        description:
          'Create beautiful bookmarks for reading enthusiasts and students. Design personalized bookmarks with quotes, images, and custom layouts.',
        features: [
          'Educational and literary themes',
          'Customizable bookmark designs',
          'Quote and image integration',
          'Multiple bookmark sizes',
          'Print-ready PDF output',
          'Lamination-friendly formats',
        ],
      },
      invitationGenerator: {
        name: 'Invitation Generator',
        description:
          'Generate elegant invitations for events, parties, weddings, and special occasions. Create professional invitations with customizable templates.',
        features: [
          'Event-specific invitation templates',
          'Wedding and party designs',
          'RSVP information integration',
          'Date and time customization',
          'Multiple invitation formats',
          'Digital and print-ready options',
        ],
      },
      giftCardGenerator: {
        name: 'Gift Card Generator',
        description:
          'Create attractive gift cards for businesses, special occasions, and personal gifts. Design custom gift cards with various themes and denominations.',
        features: [
          'Business and personal gift cards',
          'Multiple denomination options',
          'Seasonal and themed designs',
          'Security features and codes',
          'Barcode and QR code integration',
          'Professional branding options',
        ],
      },
      serviceCardGenerator: {
        name: 'Service Card Generator',
        description:
          'Generate professional service cards for after-sales support, customer service, and business communication. Create informative cards with contact details.',
        features: [
          'Professional service card templates',
          'Contact information fields',
          'Service description areas',
          'Company branding integration',
          'Multiple card formats',
          'Customer support themes',
          'Expiration date features',
          'Professional card designs',
        ],
      },
      colorTone: {
        name: 'Color Tone Maker',
        description: 'Extract beautiful color palettes from images or generate new color combinations for your designs.',
        features: [
          'Extract colors from images',
          'Generate color palettes',
          'Color code export (HEX, RGB)',
          'Save and share palettes',
          'Design inspiration',
        ],
      },
      redEnvelope: {
        name: 'Red Envelope Cover Generator',
        description: 'Design custom red envelope covers for special occasions. Create unique and festive digital red envelopes.',
        features: [
          'Custom red envelope templates',
          'Festive design elements',
          'Photo integration',
          'Text customization',
          'Digital sharing formats',
        ],
      },
    },
  },
  auth: {
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    logout: 'Sign Out',
    login: {
      title: 'Sign In',
      subtitle: 'Welcome back! Please sign in to continue.',
      submit: 'Sign In',
      noAccount: "Don't have an account?",
      signUp: 'Sign Up',
      forgotPassword: 'Forgot password?',
    },
    register: {
      title: 'Sign Up',
      subtitle: 'Create your account to get started.',
      submit: 'Create Account',
      hasAccount: 'Already have an account?',
      signIn: 'Sign In',
      success: 'Account created successfully! Redirecting to login...',
    },
    forgotPassword: {
      title: 'Reset Password',
      subtitle: 'Enter your email to receive a password reset link.',
      submit: 'Send Reset Link',
      success: 'If an account exists with this email, you will receive a password reset link.',
      error: 'Failed to send reset link. Please try again.',
      backToLogin: 'Back to Sign In',
    },
    profile: {
      title: 'Profile',
      subtitle: 'Manage your account settings',
      notLoggedIn: 'Not Logged In',
      pleaseLogin: 'Please sign in to view your profile.',
      verified: 'Verified',
      unverified: 'Unverified',
      accountDetails: 'Account Details',
      userId: 'User ID',
      actions: 'Actions',
    },
    validation: {
      emailRequired: 'Email is required',
      emailInvalid: 'Please enter a valid email',
      passwordRequired: 'Password is required',
      passwordMinLength: 'Password must be at least 6 characters',
      confirmPasswordRequired: 'Please confirm your password',
      passwordMismatch: 'Passwords do not match',
      turnstileRequired: 'Please complete the security verification',
    },
  },
}

// 中文翻译
const zh = {
  nav: {
    home: '首页',
    about: '关于',
    blog: '博客',
    slogan: '简化图片处理',
    theme: {
      light: '浅色模式',
      dark: '深色模式',
      auto: '自动',
    },
  },
  hero: {
    title: '欢迎来到 MemeJPG',
    subtitle: '满足您所有的图片编辑需求',
    exploreTools: '探索工具',
    newApp: '新功能：Mac 客户端可用',
  },
  download: {
    title: 'MemeJPG for Mac',
    chip: {
      silicon: 'Apple Silicon (M1/M2/M3)',
      intel: 'Intel 芯片',
    },
    button: {
      dmg: '下载 .dmg',
    },
    designedFor: '专为 macOS 设计',
    requires: '需要 macOS 11.0 或更高版本。',
    otherPlatforms: '寻找其他平台？',
    comingSoon: '即将推出',
    history: '历史版本',
    loading: '加载版本与中...',
    latest: '最新版本',
  },
  tools: {
    sorryCard: {
      name: '道歉卡',
      description: '为任何场合创建真挚的道歉卡。',
    },
    greetingCard: {
      name: '祝福卡片生成器',
      description: '生成带有自定义消息的个性化祝福卡片。',
    },
    birthdayCard: {
      name: '生日卡片创建器',
      description: '设计有趣的生日卡片来庆祝他们的特殊日子。',
    },
    title: '我们的图片编辑工具',
    backgroundRemover: {
      name: '背景移除器',
      description: '使用先进的AI技术自动批量移除图片背景。非常适合产品照片、人像和创建透明图片。',
    },
    fontCompressor: {
      name: '字体压缩器',
      description: '压缩字体包大小以提高网页性能。减少加载时间并优化您网站的排版，同时不损失质量。',
    },
    imageRenamer: {
      name: '图片重命名器',
      description: '使用可自定义的命名模式高效地批量重命名多张图片。轻松整理您的照片收藏。',
    },
    imageResizer: {
      name: '图片调整器',
      description: '批量调整和裁剪图片到特定尺寸。非常适合社交媒体、网页优化和保持一致的图片尺寸。',
    },
    imageCompressor: {
      name: '图片压缩器',
      description: '批量压缩图片文件大小而不损失质量。减少存储空间并提高网站加载速度。',
    },
    icoConverter: {
      name: 'ICO转换器',
      description: '将图片转换为ICO格式以创建网站图标。为网站和应用程序生成高质量图标。',
    },
    imageBeautifier: {
      name: '图片美化器',
      description: '使用AI滤镜增强和美化多张图片。提高照片质量、调整颜色并应用专业效果。',
    },
    privateDomainTrafficGenerator: {
      name: '私域流量图片生成器',
      description:
        '智能文本混淆技术，生成抗检测的私域流量转化图片。创建能够绕过内容过滤器的引人注目的视觉内容。',
    },
    businessCardGenerator: {
      name: '名片生成器',
      description:
        '使用可定制的模板和设计创建专业名片。为网络和商业目的生成高质量名片。',
    },
    qrCodeGenerator: {
      name: '二维码生成器',
      description:
        '为各种用途生成二维码，包括网址、文本、联系信息等。为商业和个人用途创建可定制的二维码。',
    },
    bookmarkGenerator: {
      name: '书签生成器',
      description:
        '为阅读和组织创建美丽的书签。设计带有自定义文本、图像和布局的个性化书签。',
    },
    invitationGenerator: {
      name: '邀请函生成器',
      description:
        '为活动、派对和特殊场合生成优雅的邀请函。使用可定制的模板创建专业邀请函。',
    },
    giftCardGenerator: {
      name: '礼品卡生成器',
      description:
        '为企业和个人使用创建吸引人的礼品卡。设计具有各种主题和面额的定制礼品卡。',
    },
    serviceCardGenerator: {
      name: '售后服务卡生成器',
      description:
        '为售后支持和客户服务生成专业的服务卡。创建包含联系详情的信息性服务卡。',
    },
    membershipCardGenerator: {
      name: '会员卡生成器',
      description:
        '为俱乐部、组织和企业创建会员卡。设计包含会员信息的专业会员卡。',
    },
    colorTone: {
      name: '配色生成器',
      description: '从图片中提取精美的配色方案，或为您的设计生成新的颜色组合。',
    },
    redEnvelope: {
      name: '红包封面生成器',
      description: '为特殊场合设计自定义红包封面。创建独特且喜庆的电子红包。',
    },
    tryNow: '立即试用',
    comingSoon: '即将推出',
  },
  features: {
    title: '为什么选择 MemeJPG？',
    fast: {
      title: '快速高效',
      description: '采用优化算法的闪电般快速处理，快速获得结果。',
    },
    privacy: {
      title: '隐私优先',
      description: '所有处理都在您的浏览器中进行。您的图片永远不会离开您的设备。',
    },
    free: {
      title: '免费使用',
      description: '我们所有的工具都是完全免费的，没有隐藏费用或订阅。',
    },
  },
  footer: {
    copyright: 'MemeJPG - 满足您所有的图片编辑需求。',
    friendlyLinks: '友情链接',
  },
  about: {
    title: '关于 MemeJPG',
    subtitle:
      '您所有图片编辑需求的一站式目的地。我们提供强大、免费且注重隐私的工具，完全在您的浏览器中运行。',
    mission: {
      title: '我们的使命',
      description1:
        '在MemeJPG，我们相信强大的图片编辑工具应该人人都能使用。我们的使命是提供高质量、基于浏览器的图片处理工具，尊重您的隐私，无需下载或订阅。',
      description2:
        '无论您是在制作表情包、为网页优化图片，还是只需要快速图片编辑，我们的工具套件都能满足您的需求。',
      tagline: '简单。快速。安全。',
    },
    tools: {
      title: '我们的工具',
      tryNow: '立即试用',
      available: '可用',
      comingSoon: '即将推出',
      features: '功能：',
    },
    values: {
      title: '我们的不同之处',
      privacy: {
        title: '隐私优先',
        description: '所有图片处理都在您的浏览器本地进行。您的图片永远不会离开您的设备。',
      },
      free: {
        title: '永远免费',
        description: '无订阅、无隐藏费用、无限制。我们所有的工具都完全免费使用。',
      },
      noInstall: {
        title: '无需安装',
        description: '基于浏览器的工具意味着无需下载、无需安装、无系统要求。',
      },
    },
    contact: {
      title: '联系我们',
      description: '有问题、建议或想要贡献？我们很乐意听到您的声音！',
      github: 'GitHub',
      email: '邮件联系',
      twitter: 'Twitter',
    },
    toolsDetail: {
      backgroundRemover: {
        name: '背景移除器',
        description: '使用先进的AI技术自动批量移除多张图片的背景。',
        features: [
          '多图片批量处理',
          'AI驱动的背景移除',
          '高质量透明PNG输出',
          '支持多种图片格式',
          '无需手动编辑',
        ],
      },
      fontCompressor: {
        name: '字体压缩器',
        description: '优化字体文件大小以加快网页加载速度，同时保持文本质量和可读性。',
        features: [
          '显著减少文件大小',
          '保持字体质量和可读性',
          '支持多种字体格式',
          '网页性能优化',
          '批量字体处理',
        ],
      },
      imageRenamer: {
        name: '图片重命名器',
        description: '使用可自定义的命名模式和规则高效地一次性重命名多张图片。',
        features: [
          '多文件批量重命名',
          '可自定义命名模式',
          '前缀和后缀选项',
          '序列编号',
          '应用前预览更改',
        ],
      },
      imageResizer: {
        name: '图片调整器和裁剪器',
        description: '将多张图片调整和裁剪到特定尺寸，同时保持质量和宽高比。',
        features: ['批量调整和裁剪', '自定义尺寸设置', '宽高比保持', '多种输出格式', '质量优化'],
      },
      imageCompressor: {
        name: '图片压缩器',
        description: '同时压缩多张图片以减少文件大小，而不影响视觉质量。',
        features: ['批量压缩处理', '无损和有损选项', '显著减少大小', '质量保持', '多格式支持'],
      },
      icoConverter: {
        name: 'ICO转换器',
        description: '将图片转换为ICO格式，用于创建网站图标和Windows图标，支持多种尺寸变体。',
        features: [
          '多ICO尺寸生成',
          '网站图标创建支持',
          '高质量转换',
          'Windows图标兼容',
          '批量处理能力',
        ],
      },
      imageBeautifier: {
        name: '图片美化器',
        description: '使用先进的AI滤镜和增强算法美化和增强多张图片。',
        features: [
          'AI驱动的图片增强',
          '批量美化处理',
          '多种滤镜选项',
          '颜色校正和优化',
          '自动质量改善',
          '亮度和对比度调整',
        ],
      },
      privateDomainTrafficGenerator: {
        name: '私域流量图片生成器',
        description:
          '智能文本混淆技术，生成抗检测的私域流量转化图片。创建能够绕过内容过滤器的引人注目的视觉内容。',
        features: [
          '智能文本混淆算法',
          '抗检测图片生成',
          '内容过滤器绕过技术',
          '私域流量优化',
          '转化导向的视觉设计',
          '反检测模式生成',
        ],
      },
      businessCardGenerator: {
        name: '名片生成器',
        description:
          '创建专业名片，具有可自定义的模板和设计。非常适合网络交流、商务会议和专业品牌建设。',
        features: [
          '专业名片模板',
          '可自定义联系信息字段',
          '多种设计主题和颜色',
          '高质量可打印输出',
          '数字名片的二维码集成',
          '即时预览和下载',
        ],
      },
      sorryCard: {
        name: '道歉卡生成器',
        description:
          '为个人和专业场合创建真诚的道歉卡。用精美设计的卡片表达真诚的歉意。',
        features: [
          '真诚道歉卡模板',
          '可自定义道歉信息',
          '个人和专业主题',
          '情感化设计元素',
          '多种卡片格式可选',
          '简易个性化选项',
        ],
      },
      greetingCard: {
        name: '祝福卡片生成器',
        description:
          '为节日、庆祝活动和特殊场合生成个性化祝福卡片。创建具有自定义信息和设计的难忘卡片。',
        features: [
          '节日和季节卡片模板',
          '可自定义祝福信息',
          '节日设计元素',
          '多种场合类别',
          '照片集成功能',
          '打印和数字分享选项',
        ],
      },
      birthdayCard: {
        name: '生日卡片生成器',
        description:
          '为朋友、家人和同事设计有趣的个性化生日卡片。创建具有自定义设计的独特生日祝福。',
        features: [
          '适合年龄的生日主题',
          '可自定义生日信息',
          '有趣多彩的设计元素',
          '照片上传和集成',
          '多种卡片尺寸选项',
          '即时下载和分享',
        ],
      },
      qrCodeGenerator: {
        name: '二维码生成器',
        description:
          '为各种用途生成二维码，包括网址、文本、联系信息、WiFi凭据等。为现代数字交互创建可扫描代码。',
        features: [
          '多种二维码数据类型',
          '网址、文本和联系人二维码',
          'WiFi和社交媒体二维码',
          '可自定义设计和颜色',
          '高分辨率输出格式',
          '批量二维码生成',
        ],
      },
      bookmarkGenerator: {
        name: '书签生成器',
        description:
          '为阅读爱好者和学生创建美丽的书签。设计带有名言、图片和自定义布局的个性化书签。',
        features: [
          '教育和文学主题',
          '可自定义书签设计',
          '名言和图片集成',
          '多种书签尺寸',
          '可打印PDF输出',
          '适合覆膜的格式',
        ],
      },
      invitationGenerator: {
        name: '邀请函生成器',
        description:
          '为活动、聚会、婚礼和特殊场合生成优雅的邀请函。使用可自定义的模板创建专业邀请函。',
        features: [
          '特定活动邀请模板',
          '婚礼和聚会设计',
          'RSVP信息集成',
          '日期和时间自定义',
          '多种邀请格式',
          '数字和可打印选项',
        ],
      },
      giftCardGenerator: {
        name: '礼品卡生成器',
        description:
          '为企业、特殊场合和个人礼品创建吸引人的礼品卡。设计具有各种主题和面额的定制礼品卡。',
        features: [
          '商业和个人礼品卡',
          '多种面额选项',
          '季节性和主题设计',
          '安全功能和代码',
          '条码和二维码集成',
          '专业品牌选项',
        ],
      },
      serviceCardGenerator: {
        name: '售后服务卡生成器',
        description:
          '为售后支持、客户服务和业务沟通生成专业服务卡。创建包含联系详情的信息性卡片。',
        features: [
          '专业服务卡模板',
          '联系信息字段',
          '服务描述区域',
          '公司品牌集成',
          '多种卡片格式',
          '客户支持主题',
        ],
      },
      membershipCardGenerator: {
        name: '会员卡生成器',
        description:
          '为俱乐部、组织、健身房和企业创建会员卡。设计包含会员信息和权益的专业卡片。',
        features: [
          '俱乐部和组织模板',
          '会员信息字段',
          '会员权益列表',
          '条码和ID集成',
          '到期日期功能',
          '专业卡片设计',
        ],
      },
    },
  },
  auth: {
    email: '邮箱',
    password: '密码',
    confirmPassword: '确认密码',
    logout: '退出登录',
    login: {
      title: '登录',
      subtitle: '欢迎回来！请登录以继续。',
      submit: '登录',
      noAccount: '还没有账户？',
      signUp: '注册',
      forgotPassword: '忘记密码？',
    },
    register: {
      title: '注册',
      subtitle: '创建您的账户以开始使用。',
      submit: '创建账户',
      hasAccount: '已有账户？',
      signIn: '登录',
      success: '账户创建成功！正在跳转到登录页面...',
    },
    forgotPassword: {
      title: '重置密码',
      subtitle: '输入您的邮箱以接收密码重置链接。',
      submit: '发送重置链接',
      success: '如果该邮箱存在账户，您将收到密码重置链接。',
      error: '发送重置链接失败，请重试。',
      backToLogin: '返回登录',
    },
    profile: {
      title: '个人中心',
      subtitle: '管理您的账户设置',
      notLoggedIn: '未登录',
      pleaseLogin: '请登录以查看您的个人资料。',
      verified: '已验证',
      unverified: '未验证',
      accountDetails: '账户详情',
      userId: '用户 ID',
      actions: '操作',
    },
    validation: {
      emailRequired: '请输入邮箱',
      emailInvalid: '请输入有效的邮箱地址',
      passwordRequired: '请输入密码',
      passwordMinLength: '密码至少需要6个字符',
      confirmPasswordRequired: '请确认您的密码',
      passwordMismatch: '两次输入的密码不一致',
      turnstileRequired: '请完成安全验证',
    },
  },
}

// 日文翻译
const ja = {
  nav: {
    home: 'ホーム',
    about: 'について',
    blog: 'ブログ',
    slogan: 'シンプルな画像ツール',
    theme: {
      light: 'ライトモード',
      dark: 'ダークモード',
      auto: '自動',
    },
  },
  hero: {
    title: 'MemeJPGへようこそ',
    subtitle: 'すべての画像編集ニーズに対応',
    exploreTools: 'ツールを探索',
    newApp: '新着: Macアプリが利用可能',
  },
  download: {
    title: 'MemeJPG for Mac',
    chip: {
      silicon: 'Appleシリコン (M1/M2/M3)',
      intel: 'Intelチップ',
    },
    button: {
      dmg: '.dmgをダウンロード',
    },
    designedFor: 'macOS向けに設計',
    requires: 'macOS 11.0以降が必要です。',
    otherPlatforms: '他のプラットフォームをお探しですか？',
    comingSoon: '近日公開',
    history: '履歴バージョン',
    loading: 'バージョンを読み込み中...',
    latest: '最新',
  },
  tools: {
    sorryCard: {
      name: 'お詫びカード',
      description: 'あらゆる場合に心こもったお詫びカードを作成します。',
    },
    greetingCard: {
      name: 'グリーティングカード生成器',
      description: 'カスタムメッセージ付きのパーソナライズしたグリーティングカードを生成します。',
    },
    birthdayCard: {
      name: '誕生日カード作成器',
      description: '特別な日を祝うための楽しい誕生日カードをデザインします。',
    },
    title: '私たちの画像編集ツール',
    backgroundRemover: {
      name: '背景除去ツール',
      description:
        '先進的なAI技術を使用して画像の背景を自動的にバッチ除去。商品写真、ポートレート、透明画像の作成に最適です。',
    },
    fontCompressor: {
      name: 'フォント圧縮ツール',
      description:
        'Webパフォーマンス向上のためにフォントパッケージサイズを圧縮。品質を損なうことなく読み込み時間を短縮し、ウェブサイトのタイポグラフィを最適化。',
    },
    imageRenamer: {
      name: '画像リネームツール',
      description:
        'カスタマイズ可能な命名パターンで複数の画像を効率的にバッチリネーム。写真コレクションを簡単に整理できます。',
    },
    imageResizer: {
      name: '画像リサイズツール',
      description:
        '画像を特定の寸法にバッチでリサイズ・クロップ。ソーシャルメディア、Web最適化、一貫した画像サイズの維持に最適。',
    },
    imageCompressor: {
      name: '画像圧縮ツール',
      description:
        '品質を損なうことなく画像ファイルサイズをバッチ圧縮。ストレージスペースを削減し、ウェブサイトの読み込み速度を向上。',
    },
    icoConverter: {
      name: 'ICOコンバーター',
      description:
        'ファビコン作成のために画像をICO形式に変換。ウェブサイトやアプリケーション用の高品質アイコンを生成。',
    },
    imageBeautifier: {
      name: '画像美化ツール',
      description:
        'AIフィルターで複数の画像を強化・美化。写真品質の向上、色調整、プロフェッショナルエフェクトの適用。',
    },
    privateDomainTrafficGenerator: {
      name: 'プライベートドメイントラフィック画像ジェネレーター',
      description:
        'スマートテキスト難読化技術により、プライベートドメイントラフィック変換用の検出耐性画像を生成。コンテンツフィルターを回避する魅力的なビジュアルを作成。',
    },
    businessCardGenerator: {
      name: '名刺ジェネレーター',
      description:
        'カスタマイズ可能なテンプレートとデザインでプロフェッショナルな名刺を作成。ネットワーキングやビジネス目的のための高品質な名刺を生成。',
    },
    qrCodeGenerator: {
      name: 'QRコード生成器',
      description:
        'URL、テキスト、連絡先情報など、様々な用途のQRコードを生成。ビジネスや個人用途でカスタマイズ可能なQRコードを作成。',
    },
    bookmarkGenerator: {
      name: 'ブックマーク生成器',
      description:
        '読書や整理のための美しいブックマークを作成。カスタムテキスト、画像、レイアウトでパーソナライズされたブックマークをデザイン。',
    },
    invitationGenerator: {
      name: '招待状生成器',
      description:
        'イベント、パーティー、特別な機会のためのエレガントな招待状を生成。カスタマイズ可能なテンプレートでプロフェッショナルな招待状を作成。',
    },
    giftCardGenerator: {
      name: 'ギフトカード生成器',
      description:
        'ビジネスや個人用途のための魅力的なギフトカードを作成。様々なテーマと額面のカスタムギフトカードをデザイン。',
    },
    serviceCardGenerator: {
      name: 'サービスカード生成器',
      description:
        'アフターサービスとカスタマーサービスのためのプロフェッショナルなサービスカードを生成。連絡先詳細付きの情報的サービスカードを作成。',
    },
    membershipCardGenerator: {
      name: 'メンバーシップカード生成器',
      description:
        'クラブ、組織、ビジネスのためのメンバーシップカードを作成。メンバー情報付きのプロフェッショナルなメンバーシップカードをデザイン。',
    },
    tryNow: '今すぐ試す',
    comingSoon: '近日公開',
  },
  features: {
    title: 'なぜMemeJPGを選ぶのか？',
    fast: {
      title: '高速・効率的',
      description: '最適化されたアルゴリズムによる超高速処理で迅速な結果を提供。',
    },
    privacy: {
      title: 'プライバシー第一',
      description:
        'すべての処理はブラウザ内で行われます。画像がデバイスから離れることはありません。',
    },
    free: {
      title: '無料で使用',
      description: 'すべてのツールは完全無料で、隠れた費用やサブスクリプションはありません。',
    },
  },
  footer: {
    copyright: 'MemeJPG - すべての画像編集ニーズに対応。',
    friendlyLinks: 'リンク',
  },
  about: {
    title: 'MemeJPGについて',
    subtitle:
      'すべての画像編集ニーズのワンストップ先。ブラウザで完全に動作する強力で無料、プライバシー重視のツールを提供します。',
    mission: {
      title: '私たちの使命',
      description1:
        'MemeJPGでは、強力な画像編集ツールは誰でもアクセスできるべきだと信じています。私たちの使命は、プライバシーを尊重し、ダウンロードや購読を必要としない高品質なブラウザベースの画像処理ツールを提供することです。',
      description2:
        'ミーム作成、Web用画像最適化、または簡単な画像編集が必要な場合でも、私たちの使いやすいツールスイートがサポートします。',
      tagline: 'シンプル。高速。安全。',
    },
    tools: {
      title: '私たちのツール',
      tryNow: '今すぐ試す',
      available: '利用可能',
      comingSoon: '近日公開',
      features: '機能：',
    },
    values: {
      title: '私たちの違い',
      privacy: {
        title: 'プライバシー第一',
        description:
          'すべての画像処理はブラウザ内でローカルに行われます。画像がデバイスから離れることはありません。',
      },
      free: {
        title: '常に無料',
        description:
          'サブスクリプション、隠れた料金、制限はありません。すべてのツールは完全に無料で使用できます。',
      },
      noInstall: {
        title: 'インストール不要',
        description:
          'ブラウザベースのツールは、ダウンロード、インストール、システム要件が不要です。',
      },
    },
    contact: {
      title: 'お問い合わせ',
      description: '質問、提案、または貢献したいことがありますか？ぜひお聞かせください！',
      github: 'GitHub',
      email: 'メール',
      twitter: 'Twitter',
    },
    toolsDetail: {
      backgroundRemover: {
        name: '背景除去ツール',
        description: '先進的なAI技術を使用して複数の画像の背景を自動的にバッチ除去。',
        features: [
          '複数画像のバッチ処理',
          'AI駆動の背景除去',
          '高品質透明PNG出力',
          '様々な画像形式をサポート',
          '手動編集不要',
        ],
      },
      fontCompressor: {
        name: 'フォント圧縮ツール',
        description:
          'テキストの品質と可読性を維持しながら、より高速なWeb読み込みのためにフォントファイルサイズを最適化。',
        features: [
          '大幅なファイルサイズ削減',
          'フォント品質と可読性の維持',
          '複数フォント形式のサポート',
          'Webパフォーマンス最適化',
          'バッチフォント処理',
        ],
      },
      imageRenamer: {
        name: '画像リネームツール',
        description: 'カスタマイズ可能な命名パターンとルールで複数の画像を一度に効率的にリネーム。',
        features: [
          '複数ファイルのバッチリネーム',
          'カスタマイズ可能な命名パターン',
          'プレフィックスとサフィックスオプション',
          '連続番号付け',
          '適用前のプレビュー',
        ],
      },
      imageResizer: {
        name: '画像リサイズ・クロップツール',
        description:
          '品質とアスペクト比を維持しながら、複数の画像を特定の寸法にリサイズ・クロップ。',
        features: [
          'バッチリサイズとクロップ',
          'カスタム寸法設定',
          'アスペクト比保持',
          '複数出力形式',
          '品質最適化',
        ],
      },
      imageCompressor: {
        name: '画像圧縮ツール',
        description: '視覚品質を損なうことなく、複数の画像を同時に圧縮してファイルサイズを削減。',
        features: [
          'バッチ圧縮処理',
          'ロスレスとロッシーオプション',
          '大幅なサイズ削減',
          '品質保持',
          '複数形式サポート',
        ],
      },
      icoConverter: {
        name: 'ICOコンバーター',
        description:
          '複数サイズバリアントでファビコンやWindowsアイコンを作成するために画像をICO形式に変換。',
        features: [
          '複数ICOサイズ生成',
          'ファビコン作成サポート',
          '高品質変換',
          'Windowsアイコン互換性',
          'バッチ処理機能',
        ],
      },
      imageBeautifier: {
        name: '画像美化ツール',
        description: '先進的なAIフィルターと強化アルゴリズムを使用して複数の画像を美化・強化。',
        features: [
          'AI駆動の画像強化',
          'バッチ美化処理',
          '複数フィルターオプション',
          '色補正と最適化',
          '自動品質改善',
          '明度とコントラスト調整',
        ],
      },
      privateDomainTrafficGenerator: {
        name: 'プライベートドメイントラフィック画像ジェネレーター',
        description:
          'スマートテキスト難読化技術により、プライベートドメイントラフィック変換用の検出耐性画像を生成。コンテンツフィルターを回避する魅力的なビジュアルを作成。',
        features: [
          'インテリジェントテキスト難読化アルゴリズム',
          '検出耐性画像生成',
          'コンテンツフィルター回避技術',
          'プライベートドメイントラフィック最適化',
          'コンバージョン重視のビジュアルデザイン',
          'アンチ検出パターン生成',
        ],
      },
    },
  },
  auth: {
    email: 'メールアドレス',
    password: 'パスワード',
    confirmPassword: 'パスワード確認',
    logout: 'ログアウト',
    login: {
      title: 'ログイン',
      subtitle: 'おかえりなさい！続行するにはログインしてください。',
      submit: 'ログイン',
      noAccount: 'アカウントをお持ちではありませんか？',
      signUp: '新規登録',
    },
    register: {
      title: '新規登録',
      subtitle: 'アカウントを作成して始めましょう。',
      submit: 'アカウント作成',
      hasAccount: '既にアカウントをお持ちですか？',
      signIn: 'ログイン',
      success: 'アカウントが作成されました！ログインページに移動中...',
    },
    profile: {
      title: 'プロフィール',
      subtitle: 'アカウント設定を管理',
      notLoggedIn: 'ログインしていません',
      pleaseLogin: 'プロフィールを表示するにはログインしてください。',
      verified: '確認済み',
      unverified: '未確認',
      accountDetails: 'アカウント詳細',
      userId: 'ユーザーID',
      actions: 'アクション',
    },
    validation: {
      emailRequired: 'メールアドレスは必須です',
      emailInvalid: '有効なメールアドレスを入力してください',
      passwordRequired: 'パスワードは必須です',
      passwordMinLength: 'パスワードは6文字以上必要です',
      confirmPasswordRequired: 'パスワードを確認してください',
      passwordMismatch: 'パスワードが一致しません',
    },
  },
}

// 西班牙语翻译
const es = {
  nav: {
    home: 'Inicio',
    about: 'Acerca de',
    blog: 'Blog',
    slogan: 'Herramientas de Imagen Simples',
  },
  hero: {
    title: 'Bienvenido a MemeJPG',
    subtitle: 'Maneja todas tus necesidades de edición de imágenes',
    exploreTools: 'Explorar Herramientas',
  },
  tools: {
    sorryCard: {
      name: 'Tarjeta de Disculpas',
      description: 'Crea tarjetas de disculpas sinceras para cualquier ocasión.',
    },
    greetingCard: {
      name: 'Generador de Tarjetas de Saludo',
      description: 'Genera tarjetas de saludo personalizadas con mensajes personalizados.',
    },
    birthdayCard: {
      name: 'Creador de Tarjetas de Cumpleaños',
      description: 'Diseña tarjetas de cumpleaños divertidas para celebrar su día especial.',
    },
    title: 'Nuestras Herramientas de Edición de Imágenes',
    backgroundRemover: {
      name: 'Removedor de Fondos',
      description:
        'Remueve fondos de imágenes en lotes automáticamente usando tecnología AI avanzada. Perfecto para fotos de productos, retratos y crear imágenes transparentes.',
    },
    fontCompressor: {
      name: 'Compresor de Fuentes',
      description:
        'Comprime el tamaño de archivos de fuentes para mejor rendimiento web. Reduce tiempos de carga y optimiza la tipografía de tu sitio web sin perder calidad.',
    },
    imageRenamer: {
      name: 'Renombrador de Imágenes',
      description:
        'Renombra múltiples imágenes en lotes eficientemente con patrones de nomenclatura personalizables. Organiza tus colecciones de fotos con facilidad.',
    },
    imageResizer: {
      name: 'Redimensionador de Imágenes',
      description:
        'Redimensiona y recorta imágenes en lotes a dimensiones específicas. Perfecto para redes sociales, optimización web y mantener tamaños de imagen consistentes.',
    },
    imageCompressor: {
      name: 'Compresor de Imágenes',
      description:
        'Comprime el tamaño de archivos de imágenes en lotes sin perder calidad. Reduce espacio de almacenamiento y mejora velocidades de carga del sitio web.',
    },
    icoConverter: {
      name: 'Convertidor ICO',
      description:
        'Convierte imágenes a formato ICO para creación de favicons. Genera iconos de alta calidad para sitios web y aplicaciones.',
    },
    imageBeautifier: {
      name: 'Embellecedor de Imágenes',
      description:
        'Mejora y embellece múltiples imágenes con filtros AI. Mejora la calidad de fotos, ajusta colores y aplica efectos profesionales.',
    },
    privateDomainTrafficGenerator: {
      name: 'Generador de Imágenes de Tráfico de Dominio Privado',
      description:
        'Ofuscación inteligente de texto para generar imágenes resistentes a detección para conversión de tráfico de dominio privado. Crea visuales atractivos que evaden filtros de contenido.',
    },
    tryNow: 'Probar Ahora',
    comingSoon: 'Próximamente',
  },
  features: {
    title: '¿Por qué elegir MemeJPG?',
    fast: {
      title: 'Rápido y Eficiente',
      description: 'Procesamiento ultrarrápido con algoritmos optimizados para resultados rápidos.',
    },
    privacy: {
      title: 'Privacidad Primero',
      description:
        'Todo el procesamiento ocurre en tu navegador. Tus imágenes nunca salen de tu dispositivo.',
    },
    free: {
      title: 'Gratis para Usar',
      description:
        'Todas nuestras herramientas son completamente gratuitas sin costos ocultos o suscripciones.',
    },
  },
  footer: {
    copyright: 'MemeJPG - Maneja todas tus necesidades de edición de imágenes.',
  },
  auth: {
    email: 'Correo electrónico',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    logout: 'Cerrar sesión',
    login: {
      title: 'Iniciar sesión',
      subtitle: '¡Bienvenido de nuevo! Inicia sesión para continuar.',
      submit: 'Iniciar sesión',
      noAccount: '¿No tienes cuenta?',
      signUp: 'Registrarse',
    },
    register: {
      title: 'Registrarse',
      subtitle: 'Crea tu cuenta para comenzar.',
      submit: 'Crear cuenta',
      hasAccount: '¿Ya tienes cuenta?',
      signIn: 'Iniciar sesión',
      success: '¡Cuenta creada exitosamente! Redirigiendo al inicio de sesión...',
    },
    profile: {
      title: 'Perfil',
      subtitle: 'Administra la configuración de tu cuenta',
      notLoggedIn: 'No has iniciado sesión',
      pleaseLogin: 'Por favor, inicia sesión para ver tu perfil.',
      verified: 'Verificado',
      unverified: 'No verificado',
      accountDetails: 'Detalles de la cuenta',
      userId: 'ID de usuario',
      actions: 'Acciones',
    },
    validation: {
      emailRequired: 'El correo electrónico es obligatorio',
      emailInvalid: 'Ingresa un correo electrónico válido',
      passwordRequired: 'La contraseña es obligatoria',
      passwordMinLength: 'La contraseña debe tener al menos 6 caracteres',
      confirmPasswordRequired: 'Por favor confirma tu contraseña',
      passwordMismatch: 'Las contraseñas no coinciden',
    },
  },
}

// 荷兰语翻译
const nl = {
  nav: {
    home: 'Home',
    about: 'Over',
    blog: 'Blog',
    slogan: 'Eenvoudige Afbeeldingstools',
  },
  hero: {
    title: 'Welkom bij MemeJPG',
    subtitle: 'Behandel al je beeldbewerkingsbehoeften',
    exploreTools: 'Verken Tools',
  },
  tools: {
    sorryCard: {
      name: 'Verontschuldigingskaart',
      description: 'Maak oprechte verontschuldigingskaarten voor elke gelegenheid.',
    },
    greetingCard: {
      name: 'Wenskaart Generator',
      description: 'Genereer gepersonaliseerde wenskaarten met aangepaste berichten.',
    },
    birthdayCard: {
      name: 'Verjaardagskaart Maker',
      description: 'Ontwerp leuke verjaardagskaarten om hun speciale dag te vieren.',
    },
    title: 'Onze Beeldbewerkingstools',
    backgroundRemover: {
      name: 'Achtergrond Verwijderaar',
      description:
        "Verwijder achtergronden van afbeeldingen in batches automatisch met geavanceerde AI-technologie. Perfect voor productfoto's, portretten en het maken van transparante afbeeldingen.",
    },
    fontCompressor: {
      name: 'Lettertype Compressor',
      description:
        'Comprimeer lettertype bestandsgroottes voor betere webprestaties. Verminder laadtijden en optimaliseer de typografie van je website zonder kwaliteitsverlies.',
    },
    imageRenamer: {
      name: 'Afbeelding Herbenamer',
      description:
        'Hernoem meerdere afbeeldingen in batches efficiënt met aanpasbare naamgevingspatronen. Organiseer je fotocollecties met gemak.',
    },
    imageResizer: {
      name: 'Afbeelding Grootte Wijziger',
      description:
        'Wijzig grootte en snijd afbeeldingen in batches naar specifieke afmetingen. Perfect voor sociale media, weboptimalisatie en het behouden van consistente afbeeldingsgroottes.',
    },
    imageCompressor: {
      name: 'Afbeelding Compressor',
      description:
        'Comprimeer afbeelding bestandsgroottes in batches zonder kwaliteitsverlies. Verminder opslagruimte en verbeter website laadsnelheden.',
    },
    icoConverter: {
      name: 'ICO Converter',
      description:
        'Converteer afbeeldingen naar ICO-formaat voor favicon creatie. Genereer hoogwaardige pictogrammen voor websites en applicaties.',
    },
    imageBeautifier: {
      name: 'Afbeelding Verfraaijer',
      description:
        'Verbeter en verfraai meerdere afbeeldingen met AI-filters. Verbeter fotokwaliteit, pas kleuren aan en pas professionele effecten toe.',
    },
    privateDomainTrafficGenerator: {
      name: 'Privé Domein Verkeer Afbeelding Generator',
      description:
        'Slimme tekst obfuscatie om detectie-resistente afbeeldingen te genereren voor privé domein verkeer conversie. Creëer aantrekkelijke visuals die inhoudsfilters omzeilen.',
    },
    tryNow: 'Probeer Nu',
    comingSoon: 'Binnenkort',
  },
  features: {
    title: 'Waarom MemeJPG kiezen?',
    fast: {
      title: 'Snel & Efficiënt',
      description:
        'Bliksemsnelle verwerking met geoptimaliseerde algoritmen voor snelle resultaten.',
    },
    privacy: {
      title: 'Privacy Eerst',
      description:
        'Alle verwerking gebeurt in je browser. Je afbeeldingen verlaten nooit je apparaat.',
    },
    free: {
      title: 'Gratis te Gebruiken',
      description: 'Al onze tools zijn volledig gratis zonder verborgen kosten of abonnementen.',
    },
  },
  footer: {
    copyright: 'MemeJPG - Behandel al je beeldbewerkingsbehoeften.',
  },
  auth: {
    email: 'E-mail',
    password: 'Wachtwoord',
    confirmPassword: 'Bevestig wachtwoord',
    logout: 'Uitloggen',
    login: {
      title: 'Inloggen',
      subtitle: 'Welkom terug! Log in om door te gaan.',
      submit: 'Inloggen',
      noAccount: 'Geen account?',
      signUp: 'Registreren',
    },
    register: {
      title: 'Registreren',
      subtitle: 'Maak je account aan om te beginnen.',
      submit: 'Account aanmaken',
      hasAccount: 'Heb je al een account?',
      signIn: 'Inloggen',
      success: 'Account succesvol aangemaakt! Doorsturen naar inloggen...',
    },
    profile: {
      title: 'Profiel',
      subtitle: 'Beheer je accountinstellingen',
      notLoggedIn: 'Niet ingelogd',
      pleaseLogin: 'Log in om je profiel te bekijken.',
      verified: 'Geverifieerd',
      unverified: 'Niet geverifieerd',
      accountDetails: 'Accountgegevens',
      userId: 'Gebruikers-ID',
      actions: 'Acties',
    },
    validation: {
      emailRequired: 'E-mail is verplicht',
      emailInvalid: 'Voer een geldig e-mailadres in',
      passwordRequired: 'Wachtwoord is verplicht',
      passwordMinLength: 'Wachtwoord moet minimaal 6 tekens bevatten',
      confirmPasswordRequired: 'Bevestig je wachtwoord',
      passwordMismatch: 'Wachtwoorden komen niet overeen',
    },
  },
}

// 韩语翻译
const ko = {
  nav: {
    home: '홈',
    about: '소개',
    blog: '블로그',
    slogan: '간단한 이미지 도구',
  },
  hero: {
    title: 'MemeJPG에 오신 것을 환영합니다',
    subtitle: '모든 이미지 편집 요구사항을 처리하세요',
    exploreTools: '도구 탐색',
  },
  tools: {
    sorryCard: {
      name: '사과 카드',
      description: '모든 경우에 진심 어린 사과 카드를 만드세요.',
    },
    greetingCard: {
      name: '인사말 카드 생성기',
      description: '맞춤 메시지로 개인화된 인사말 카드를 생성합니다.',
    },
    birthdayCard: {
      name: '생일 카드 생성기',
      description: '특별한 날을 축하하기 위한 재미있는 생일 카드를 디자인합니다.',
    },
    title: '우리의 이미지 편집 도구',
    backgroundRemover: {
      name: '배경 제거기',
      description:
        '고급 AI 기술을 사용하여 이미지의 배경을 자동으로 일괄 제거합니다. 제품 사진, 인물 사진 및 투명 이미지 생성에 완벽합니다.',
    },
    fontCompressor: {
      name: '폰트 압축기',
      description:
        '더 나은 웹 성능을 위해 폰트 파일 크기를 압축합니다. 로딩 시간을 줄이고 품질 손실 없이 웹사이트의 타이포그래피를 최적화합니다.',
    },
    imageRenamer: {
      name: '이미지 이름 변경기',
      description:
        '사용자 정의 가능한 명명 패턴으로 여러 이미지를 효율적으로 일괄 이름 변경합니다. 사진 컬렉션을 쉽게 정리하세요.',
    },
    imageResizer: {
      name: '이미지 크기 조정기',
      description:
        '이미지를 특정 크기로 일괄 크기 조정 및 자르기합니다. 소셜 미디어, 웹 최적화 및 일관된 이미지 크기 유지에 완벽합니다.',
    },
    imageCompressor: {
      name: '이미지 압축기',
      description:
        '품질 손실 없이 이미지 파일 크기를 일괄 압축합니다. 저장 공간을 줄이고 웹사이트 로딩 속도를 향상시킵니다.',
    },
    icoConverter: {
      name: 'ICO 변환기',
      description:
        '파비콘 생성을 위해 이미지를 ICO 형식으로 변환합니다. 웹사이트와 애플리케이션용 고품질 아이콘을 생성합니다.',
    },
    imageBeautifier: {
      name: '이미지 미화기',
      description:
        'AI 필터로 여러 이미지를 향상시키고 미화합니다. 사진 품질을 개선하고 색상을 조정하며 전문적인 효과를 적용합니다.',
    },
    privateDomainTrafficGenerator: {
      name: '프라이빗 도메인 트래픽 이미지 생성기',
      description:
        '프라이빗 도메인 트래픽 전환을 위한 탐지 저항 이미지를 생성하는 스마트 텍스트 난독화. 콘텐츠 필터를 우회하는 매력적인 비주얼을 만듭니다.',
    },
    tryNow: '지금 시도',
    comingSoon: '곧 출시',
  },
  features: {
    title: '왜 MemeJPG를 선택해야 할까요?',
    fast: {
      title: '빠르고 효율적',
      description: '빠른 결과를 위한 최적화된 알고리즘으로 번개같이 빠른 처리.',
    },
    privacy: {
      title: '프라이버시 우선',
      description: '모든 처리는 브라우저에서 발생합니다. 이미지가 기기를 떠나지 않습니다.',
    },
    free: {
      title: '무료 사용',
      description: '모든 도구는 숨겨진 비용이나 구독 없이 완전히 무료입니다.',
    },
  },
  footer: {
    copyright: 'MemeJPG - 모든 이미지 편집 요구사항을 처리합니다.',
  },
  auth: {
    email: '이메일',
    password: '비밀번호',
    confirmPassword: '비밀번호 확인',
    logout: '로그아웃',
    login: {
      title: '로그인',
      subtitle: '다시 오신 것을 환영합니다! 계속하려면 로그인하세요.',
      submit: '로그인',
      noAccount: '계정이 없으신가요?',
      signUp: '회원가입',
    },
    register: {
      title: '회원가입',
      subtitle: '시작하려면 계정을 만드세요.',
      submit: '계정 만들기',
      hasAccount: '이미 계정이 있으신가요?',
      signIn: '로그인',
      success: '계정이 성공적으로 생성되었습니다! 로그인 페이지로 이동 중...',
    },
    profile: {
      title: '프로필',
      subtitle: '계정 설정 관리',
      notLoggedIn: '로그인하지 않음',
      pleaseLogin: '프로필을 보려면 로그인하세요.',
      verified: '인증됨',
      unverified: '미인증',
      accountDetails: '계정 정보',
      userId: '사용자 ID',
      actions: '작업',
    },
    validation: {
      emailRequired: '이메일을 입력하세요',
      emailInvalid: '유효한 이메일 주소를 입력하세요',
      passwordRequired: '비밀번호를 입력하세요',
      passwordMinLength: '비밀번호는 최소 6자 이상이어야 합니다',
      confirmPasswordRequired: '비밀번호를 확인하세요',
      passwordMismatch: '비밀번호가 일치하지 않습니다',
    },
  },
}

// 法语翻译
const fr = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    blog: 'Blog',
    slogan: "Outils d'Image Simples",
  },
  hero: {
    title: 'Bienvenue sur MemeJPG',
    subtitle: "Gérez tous vos besoins d'édition d'images",
    exploreTools: 'Explorer les Outils',
  },
  tools: {
    sorryCard: {
      name: "Carte d'Excuses",
      description: "Créez des cartes d'excuses sincères pour toute occasion.",
    },
    greetingCard: {
      name: 'Générateur de Cartes de Vœux',
      description: 'Générez des cartes de vœux personnalisées avec des messages personnalisés.',
    },
    birthdayCard: {
      name: "Créateur de Cartes d'Anniversaire",
      description: "Concevez des cartes d'anniversaire amusantes pour célébrer leur jour spécial.",
    },
    title: "Nos Outils d'Édition d'Images",
    backgroundRemover: {
      name: "Suppresseur d'Arrière-plan",
      description:
        "Supprimez automatiquement les arrière-plans des images par lots en utilisant une technologie IA avancée. Parfait pour les photos de produits, les portraits et la création d'images transparentes.",
    },
    fontCompressor: {
      name: 'Compresseur de Polices',
      description:
        'Compressez les tailles de fichiers de polices pour de meilleures performances web. Réduisez les temps de chargement et optimisez la typographie de votre site web sans perte de qualité.',
    },
    imageRenamer: {
      name: "Renommeur d'Images",
      description:
        'Renommez efficacement plusieurs images par lots avec des modèles de nommage personnalisables. Organisez vos collections de photos avec facilité.',
    },
    imageResizer: {
      name: "Redimensionneur d'Images",
      description:
        "Redimensionnez et recadrez les images par lots selon des dimensions spécifiques. Parfait pour les réseaux sociaux, l'optimisation web et le maintien de tailles d'images cohérentes.",
    },
    imageCompressor: {
      name: "Compresseur d'Images",
      description:
        "Compressez les tailles de fichiers d'images par lots sans compromettre la qualité visuelle. Réduisez l'espace de stockage et améliorez les vitesses de chargement du site web.",
    },
    icoConverter: {
      name: 'Convertisseur ICO',
      description:
        'Convertissez les images au format ICO pour la création de favicons. Générez des icônes de haute qualité pour les sites web et applications.',
    },
    imageBeautifier: {
      name: "Embellisseur d'Images",
      description:
        'Améliorez et embellissez plusieurs images avec des filtres IA. Améliorez la qualité des photos, ajustez les couleurs et appliquez des effets professionnels.',
    },
    privateDomainTrafficGenerator: {
      name: "Générateur d'Images de Trafic de Domaine Privé",
      description:
        'Obfuscation intelligente de texte pour générer des images résistantes à la détection pour la conversion de trafic de domaine privé. Créez des visuels attrayants qui contournent les filtres de contenu.',
    },
    tryNow: 'Essayer Maintenant',
    comingSoon: 'Bientôt Disponible',
  },
  features: {
    title: 'Pourquoi choisir MemeJPG ?',
    fast: {
      title: 'Rapide et Efficace',
      description:
        'Traitement ultra-rapide avec des algorithmes optimisés pour des résultats rapides.',
    },
    privacy: {
      title: "Confidentialité d'Abord",
      description:
        'Tout le traitement se fait dans votre navigateur. Vos images ne quittent jamais votre appareil.',
    },
    free: {
      title: 'Gratuit à Utiliser',
      description: 'Tous nos outils sont entièrement gratuits sans coûts cachés ou abonnements.',
    },
  },
  footer: {
    copyright: "MemeJPG - Gérez tous vos besoins d'édition d'images.",
  },
  auth: {
    email: 'E-mail',
    password: 'Mot de passe',
    confirmPassword: 'Confirmer le mot de passe',
    logout: 'Déconnexion',
    login: {
      title: 'Connexion',
      subtitle: 'Bon retour ! Connectez-vous pour continuer.',
      submit: 'Se connecter',
      noAccount: "Pas de compte ?",
      signUp: "S'inscrire",
    },
    register: {
      title: 'Inscription',
      subtitle: 'Créez votre compte pour commencer.',
      submit: 'Créer un compte',
      hasAccount: 'Vous avez déjà un compte ?',
      signIn: 'Se connecter',
      success: 'Compte créé avec succès ! Redirection vers la connexion...',
    },
    profile: {
      title: 'Profil',
      subtitle: 'Gérez les paramètres de votre compte',
      notLoggedIn: 'Non connecté',
      pleaseLogin: 'Veuillez vous connecter pour voir votre profil.',
      verified: 'Vérifié',
      unverified: 'Non vérifié',
      accountDetails: 'Détails du compte',
      userId: 'ID utilisateur',
      actions: 'Actions',
    },
    validation: {
      emailRequired: "L'e-mail est requis",
      emailInvalid: 'Veuillez entrer une adresse e-mail valide',
      passwordRequired: 'Le mot de passe est requis',
      passwordMinLength: 'Le mot de passe doit contenir au moins 6 caractères',
      confirmPasswordRequired: 'Veuillez confirmer votre mot de passe',
      passwordMismatch: 'Les mots de passe ne correspondent pas',
    },
  },
}

// 德语翻译
const de = {
  nav: {
    home: 'Startseite',
    about: 'Über uns',
    blog: 'Blog',
    slogan: 'Einfache Bildtools',
  },
  hero: {
    title: 'Willkommen bei MemeJPG',
    subtitle: 'Bewältigen Sie alle Ihre Bildbearbeitungsanforderungen',
    exploreTools: 'Tools Erkunden',
  },
  tools: {
    sorryCard: {
      name: 'Entschuldigungskarte',
      description: 'Erstellen Sie herzliche Entschuldigungskarten für jeden Anlass.',
    },
    greetingCard: {
      name: 'Grußkarten-Generator',
      description: 'Generieren Sie personalisierte Grußkarten mit benutzerdefinierten Nachrichten.',
    },
    birthdayCard: {
      name: 'Geburtstagskarten-Ersteller',
      description: 'Entwerfen Sie lustige Geburtstagskarten, um ihren besonderen Tag zu feiern.',
    },
    title: 'Unsere Bildbearbeitungstools',
    backgroundRemover: {
      name: 'Hintergrund-Entferner',
      description:
        'Entfernen Sie automatisch Hintergründe von Bildern in Stapeln mit fortschrittlicher KI-Technologie. Perfekt für Produktfotos, Porträts und die Erstellung transparenter Bilder.',
    },
    fontCompressor: {
      name: 'Schriftart-Kompressor',
      description:
        'Komprimieren Sie Schriftart-Dateigrößen für bessere Web-Performance. Reduzieren Sie Ladezeiten und optimieren Sie die Typografie Ihrer Website ohne Qualitätsverlust.',
    },
    imageRenamer: {
      name: 'Bild-Umbenenner',
      description:
        'Benennen Sie mehrere Bilder effizient in Stapeln mit anpassbaren Benennungsmustern um. Organisieren Sie Ihre Fotosammlungen mit Leichtigkeit.',
    },
    imageResizer: {
      name: 'Bildgrößen-Änderer',
      description:
        'Ändern Sie die Größe und schneiden Sie Bilder in Stapeln auf spezifische Dimensionen zu. Perfekt für soziale Medien, Web-Optimierung und die Beibehaltung konsistenter Bildgrößen.',
    },
    imageCompressor: {
      name: 'Bild-Kompressor',
      description:
        'Komprimieren Sie Bild-Dateigrößen in Stapeln ohne Beeinträchtigung der visuellen Qualität. Reduzieren Sie Speicherplatz und verbessern Sie Website-Ladegeschwindigkeiten.',
    },
    icoConverter: {
      name: 'ICO-Konverter',
      description:
        'Konvertieren Sie Bilder ins ICO-Format für Favicon-Erstellung. Generieren Sie hochwertige Icons für Websites und Anwendungen.',
    },
    imageBeautifier: {
      name: 'Bild-Verschönerer',
      description:
        'Verbessern und verschönern Sie mehrere Bilder mit KI-Filtern. Verbessern Sie Fotoqualität, passen Sie Farben an und wenden Sie professionelle Effekte an.',
    },
    privateDomainTrafficGenerator: {
      name: 'Private Domain Traffic Bild-Generator',
      description:
        'Intelligente Text-Verschleierung zur Generierung erkennungsresistenter Bilder für Private Domain Traffic Konversion. Erstellen Sie ansprechende Visuals, die Inhaltsfilter umgehen.',
    },
    tryNow: 'Jetzt Ausprobieren',
    comingSoon: 'Demnächst',
  },
  features: {
    title: 'Warum MemeJPG wählen?',
    fast: {
      title: 'Schnell & Effizient',
      description:
        'Blitzschnelle Verarbeitung mit optimierten Algorithmen für schnelle Ergebnisse.',
    },
    privacy: {
      title: 'Datenschutz Zuerst',
      description:
        'Alle Verarbeitung findet in Ihrem Browser statt. Ihre Bilder verlassen niemals Ihr Gerät.',
    },
    free: {
      title: 'Kostenlos zu Verwenden',
      description:
        'Alle unsere Tools sind völlig kostenlos ohne versteckte Kosten oder Abonnements.',
    },
  },
  footer: {
    copyright: 'MemeJPG - Bewältigen Sie alle Ihre Bildbearbeitungsanforderungen.',
  },
  auth: {
    email: 'E-Mail',
    password: 'Passwort',
    confirmPassword: 'Passwort bestätigen',
    logout: 'Abmelden',
    login: {
      title: 'Anmelden',
      subtitle: 'Willkommen zurück! Melden Sie sich an, um fortzufahren.',
      submit: 'Anmelden',
      noAccount: 'Kein Konto?',
      signUp: 'Registrieren',
    },
    register: {
      title: 'Registrieren',
      subtitle: 'Erstellen Sie Ihr Konto, um zu beginnen.',
      submit: 'Konto erstellen',
      hasAccount: 'Haben Sie bereits ein Konto?',
      signIn: 'Anmelden',
      success: 'Konto erfolgreich erstellt! Weiterleitung zur Anmeldung...',
    },
    profile: {
      title: 'Profil',
      subtitle: 'Verwalten Sie Ihre Kontoeinstellungen',
      notLoggedIn: 'Nicht angemeldet',
      pleaseLogin: 'Bitte melden Sie sich an, um Ihr Profil zu sehen.',
      verified: 'Verifiziert',
      unverified: 'Nicht verifiziert',
      accountDetails: 'Kontodetails',
      userId: 'Benutzer-ID',
      actions: 'Aktionen',
    },
    validation: {
      emailRequired: 'E-Mail ist erforderlich',
      emailInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      passwordRequired: 'Passwort ist erforderlich',
      passwordMinLength: 'Passwort muss mindestens 6 Zeichen haben',
      confirmPasswordRequired: 'Bitte bestätigen Sie Ihr Passwort',
      passwordMismatch: 'Passwörter stimmen nicht überein',
    },
  },
}

const messages = {
  en,
  zh,
  ja,
  es,
  nl,
  ko,
  fr,
  de,
}

const i18n = createI18n({
  legacy: false,
  locale: 'en', // 默认语言
  fallbackLocale: 'en',
  messages,
})

export default i18n
