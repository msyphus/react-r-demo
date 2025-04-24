result = function(data) {
    histData <- sample(c(0:50), data, replace=TRUE)
    return(hist(histData, col="purple"))
}