console.clear()
const axios = require('axios')

function strToURL(str) {
    return str.toLowerCase().trim()
        .replace(/[áàãâä]/g, "a")
        .replace(/[éèẽêë]/g, "e")
        .replace(/[íìĩîï]/g, "i")
        .replace(/[óòõôö]/g, "o")
        .replace(/[úùũûü]/g, "u")
        .replace(/ç/g, "c")
        .replace(/(\ |_)+/, " ")
        .replace(/(^-+|-+$)/, "")
        .replace(/[^a-z0-9]+/g, '-');
}

async function getArticlesData() {
    const articles = await axios.get('https://ww-blog-api.herokuapp.com/articles')

    return articles.data.data
}

async function getCategoriesData() {
    const categories = await axios.get('https://ww-blog-api.herokuapp.com/categories')

    return categories.data.data
}

async function getCategoryTitle(id) {
    const categoryTitle = await axios.get('https://ww-blog-api.herokuapp.com/category/' + id + '/articles/0')

    return categoryTitle.data.data.title
}

async function setArticleToUrl() {
    const articles = await getArticlesData()
    let articlesUrl = []

    for (let el of articles) {
        let articleId = el.id
        let articleTitle = strToURL(el.title)
        let articleCategory = strToURL(await getCategoryTitle(el.CategoryId))

        articlesUrl.push(`${articleCategory}/noticia/${articleId}/${articleTitle}`)
    }

    for (let el of articles) {
        let articleId = el.id
        let articleTitle = strToURL(el.title)

        articlesUrl.push(`perfil/editar/noticia/${articleId}/${articleTitle}`)
    }

    return articlesUrl
}

async function setCategoryToUrl() {
    const categories = await getCategoriesData()
    let categorysUrl = []

    for (let el of categories) {
        let categoryTitle = strToURL(el.title)
        categorysUrl.push(categoryTitle)
    }

    for (let el of categories) {
        let categoryId = el.id
        let categoryTitle = strToURL(el.title)
        categorysUrl.push(`perfil/editar/categoria/${categoryId}/${categoryTitle}`)
    }

    return categorysUrl
}

function templateXml(url, priorityPoint) {
    const loc = '<loc>http://mefala.000webhostapp.com/' + url + '</loc>'
    const lastmod = '<lastmod>2022-08-20</lastmod>'
    const priority = '<priority>' + priorityPoint + '</priority>'
    const changefreq = '<priority>weekly</priority>'

    return {
        loc,
        lastmod,
        priority,
        changefreq
    }
}

function startXml() {
    console.log('<?xml version="1.0" encoding="UTF-8"?>')
    console.log('<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"')
    console.log('xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">')
    console.log('<url>')
    console.log('    <loc>http://mefala.000webhostapp.com/</loc>')
    console.log('    <lastmod>2022-08-20</lastmod>')
    console.log('    <priority>1.0</priority>')
    console.log('    <changefreq>weekly</changefreq>')
    console.log('</url>')
    console.log('<url>')
    console.log('    <loc>http://mefala.000webhostapp.com/login</loc>')
    console.log('    <lastmod>2022-08-20</lastmod>')
    console.log('    <priority>0.1</priority>')
    console.log('    <changefreq>weekly</changefreq>')
    console.log('</url>')
    console.log('<url>')
    console.log('    <loc>http://mefala.000webhostapp.com/perfil</loc>')
    console.log('    <lastmod>2022-08-20</lastmod>')
    console.log('    <priority>0.1</priority>')
    console.log('    <changefreq>weekly</changefreq>')
    console.log('</url>')
    console.log('<url>')
    console.log('    <loc>http://mefala.000webhostapp.com/perfil/noticiar</loc>')
    console.log('    <lastmod>2022-08-20</lastmod>')
    console.log('    <priority>0.1</priority>')
    console.log('    <changefreq>weekly</changefreq>')
    console.log('</url>')
    console.log('<url>')
    console.log('    <loc>http://mefala.000webhostapp.com/perfil/nova/categoria</loc>')
    console.log('    <lastmod>2022-08-20</lastmod>')
    console.log('    <priority>0.1</priority>')
    console.log('    <changefreq>weekly</changefreq>')
    console.log('</url>')
}

async function xmlGenerator() {
    let data = []

    const articleData = await setArticleToUrl()
    const categoryData = await setCategoryToUrl()

    for (let el of articleData){
        data.push(templateXml(el, 0.9))
    }

    for (let el of categoryData){
        data.push(templateXml(el, 0.8))
    }

    startXml()

    for (let el of data) {
        console.log('<url>')
        console.log(el.loc)
        console.log(el.lastmod)
        console.log(el.priority)
        console.log(el.changefreq)
        console.log('</url>')
    }

    console.log('</urlset>')
}

xmlGenerator()