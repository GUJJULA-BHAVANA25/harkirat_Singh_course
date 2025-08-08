function createCourseRoutes(app){
    app.post("/course/purchase", function(req, res) {
        res.json({
            message: "purchase endpoint"
        })
    })

    app.get("/courses", function(req, res){
        res.json({
            message: "courses available"
        })
    })
}

module.exports = {
    createCourseRoutes: createCourseRoutes
}