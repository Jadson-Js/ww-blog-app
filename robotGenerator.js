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

async function setArticleToUrl() {
    const articles = await getArticlesData()
    let articlesUrl = []

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
        let categoryId = el.id
        let categoryTitle = strToURL(el.title)
        categorysUrl.push(`perfil/editar/categoria/${categoryId}/${categoryTitle}`)
    }

    return categorysUrl
}

function templateXml(url) {
    const Disallow = 'Disallow: /' + url + '/'
    const Noindex = 'Noindex: /' + url + '/'
    return {
        Disallow,
        Noindex
    }
}

function startXml() {
    console.log('User-agent: *')
    console.log('Disallow: /login/')
    console.log('Noindex: /login/')
    console.log('')
    console.log('User-agent: *')
    console.log('Disallow: /perfil/')
    console.log('Noindex: /perfil/')
    console.log('')
    console.log('User-agent: *')
    console.log('Disallow: /perfil/noticiar/')
    console.log('Noindex: /perfil/noticiar/')
    console.log('')
    console.log('User-agent: *')
    console.log('Disallow: /perfil/nova/categoria/')
    console.log('Noindex: /perfil/nova/categoria/')
    console.log('')
}

async function xmlGenerator() {
    let data = []

    const articleData = await setArticleToUrl()
    const categoryData = await setCategoryToUrl()

    for (let el of articleData){
        data.push(templateXml(el))
    }

    for (let el of categoryData){
        data.push(templateXml(el))
    }

    startXml()

    for (let el of data) {
        console.log('')
        console.log('User-agent: *')
        console.log(el.Disallow)
        console.log(el.Noindex)
    }
}

xmlGenerator()