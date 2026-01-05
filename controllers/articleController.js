const getAllArticles = (req, res) => {
    res.send('Get all articles')
}

const getArticleById = (req, res) => {
    const articleId = req.params.articleId
    res.send(`Get article with ID: ${articleId}`)
}

const createArticle = (req, res) => {
    res.send(`Create a new article ${articleId}`);
}

const updateArticle = (req, res) => {
    const articleId = req.params.articleId
    res.send(`Update article with ID: ${articleId}`)
}

const deleteArticle = (req, res) => {
    const articleId = req.params.articleId
    res.send(`Delete article with ID: ${articleId}`)
}

module.exports = {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}