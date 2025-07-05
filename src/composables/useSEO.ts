import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

interface SEOData {
  title: string
  description: string
  keywords: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
}

export function useSEO() {
  const { locale } = useI18n()

  const seoData = {
    en: {
      title: 'MemeJPG - Free Batch Image Editing Tools | Background Remover, Compressor & More',
      description: 'Free batch image editing tools. Remove backgrounds, compress images, rename files, resize photos, convert to ICO, beautify images, and compress fonts - all in your browser. Privacy-first, fast, and completely free.',
      keywords: 'batch image editor, background remover, image compression, font compressor, image renamer, image resizer, ICO converter, image beautifier, AI enhancement, batch processing, free image tools, online image editor, privacy-first image tools, browser-based image editing',
      ogTitle: 'MemeJPG - Free Batch Image Editing Tools',
      ogDescription: 'Free batch image editing tools. Remove backgrounds, compress images, rename files, resize photos, convert to ICO, beautify images, and compress fonts - all in your browser.',
      ogImage: '/favicon.ico',
    },
    zh: {
      title: 'MemeJPG - 免费批量图片编辑工具 | 背景移除、压缩等',
      description: '免费批量图片编辑工具。移除背景、压缩图片、重命名文件、调整照片尺寸、转换ICO、美化图片和压缩字体 - 全部在浏览器中完成。隐私优先、快速且完全免费。',
      keywords: '批量图片编辑器, 背景移除器, 图片压缩, 字体压缩器, 图片重命名器, 图片调整器, ICO转换器, 图片美化器, AI增强, 批量处理, 免费图片工具, 在线图片编辑器, 隐私优先图片工具, 浏览器图片编辑',
      ogTitle: 'MemeJPG - 免费批量图片编辑工具',
      ogDescription: '免费批量图片编辑工具。移除背景、压缩图片、重命名文件、调整照片尺寸、转换ICO、美化图片和压缩字体 - 全部在浏览器中完成。',
      ogImage: '/favicon.ico',
    },
    ja: {
      title: 'MemeJPG - 無料バッチ画像編集ツール | 背景除去、圧縮など',
      description: '無料バッチ画像編集ツール。背景除去、画像圧縮、ファイルリネーム、写真リサイズ、ICO変換、画像美化、フォント圧縮 - すべてブラウザで完結。プライバシー第一、高速、完全無料。',
      keywords: 'バッチ画像エディタ, 背景除去ツール, 画像圧縮, フォント圧縮ツール, 画像リネームツール, 画像リサイズツール, ICOコンバーター, 画像美化ツール, AI強化, バッチ処理, 無料画像ツール, オンライン画像エディタ, プライバシー第一画像ツール, ブラウザベース画像編集',
      ogTitle: 'MemeJPG - 無料バッチ画像編集ツール',
      ogDescription: '無料バッチ画像編集ツール。背景除去、画像圧縮、ファイルリネーム、写真リサイズ、ICO変換、画像美化、フォント圧縮 - すべてブラウザで完結。',
      ogImage: '/favicon.ico',
    },
  }

  const updateSEO = (customData?: Partial<SEOData>) => {
    const currentLocale = locale.value as keyof typeof seoData
    const data = { ...seoData[currentLocale], ...customData }

    // 更新页面标题
    document.title = data.title

    // 更新或创建meta标签
    updateMetaTag('description', data.description)
    updateMetaTag('keywords', data.keywords)
    updateMetaTag('author', 'MemeJPG')

    // Open Graph标签
    updateMetaProperty('og:type', 'website')
    updateMetaProperty('og:url', window.location.href)
    updateMetaProperty('og:title', data.ogTitle || data.title)
    updateMetaProperty('og:description', data.ogDescription || data.description)
    updateMetaProperty('og:image', data.ogImage || '/favicon.ico')
    updateMetaProperty('og:site_name', 'MemeJPG')
    updateMetaProperty('og:locale', getOGLocale(currentLocale))

    // Twitter标签
    updateMetaProperty('twitter:card', 'summary_large_image')
    updateMetaProperty('twitter:url', window.location.href)
    updateMetaProperty('twitter:title', data.twitterTitle || data.title)
    updateMetaProperty('twitter:description', data.twitterDescription || data.description)
    updateMetaProperty('twitter:image', data.twitterImage || data.ogImage || '/favicon.ico')

    // 更新HTML lang属性
    document.documentElement.lang = getHTMLLang(currentLocale)

    // 添加结构化数据
    updateStructuredData(data, currentLocale)
  }

  const updateMetaTag = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', name)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }

  const updateMetaProperty = (property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('property', property)
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
  }

  const getOGLocale = (locale: string) => {
    const localeMap: Record<string, string> = {
      en: 'en_US',
      zh: 'zh_CN',
      ja: 'ja_JP',
    }
    return localeMap[locale] || 'en_US'
  }

  const getHTMLLang = (locale: string) => {
    const langMap: Record<string, string> = {
      en: 'en',
      zh: 'zh-CN',
      ja: 'ja',
    }
    return langMap[locale] || 'en'
  }

  const updateStructuredData = (data: SEOData, locale: string) => {
    // 移除现有的结构化数据
    const existingScript = document.querySelector('script[type="application/ld+json"]')
    if (existingScript) {
      existingScript.remove()
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'MemeJPG',
      description: data.description,
      url: 'https://memejpg.com',
      inLanguage: getHTMLLang(locale),
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://memejpg.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
      publisher: {
        '@type': 'Organization',
        name: 'MemeJPG',
        url: 'https://memejpg.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://memejpg.com/favicon.ico',
        },
      },
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)
  }

  // 监听语言变化
  watch(locale, () => {
    updateSEO()
  })

  return {
    updateSEO,
    seoData,
  }
}
