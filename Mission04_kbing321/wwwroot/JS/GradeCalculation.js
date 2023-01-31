$("#calculate").click(function () {
    // calculate total percentage grade
    total =
        Math.round(((parseFloat($("#assignment").val()) * .5)
        + (parseFloat($("#project").val()) * .1)
        + (parseFloat($("#quiz").val()) * .1)
        + (parseFloat($("#midterm").val()) * .1)
        + (parseFloat($("#final").val()) * .1)
        + (parseFloat($("#intex").val()) * .1)) * 100) / 100

    // determine letter grade based on total
    if (total >= 94) {
        letterGrade = 'A'
    }
    else if (total >= 90 & total < 94) {
        letterGrade = 'A-'
    }
    else if (total >= 87 & total < 90) {
        letterGrade = 'B+'
    }
    else if (total >= 84 & total < 87) {
        letterGrade = 'B'
    }
    else if (total >= 80 & total < 84) {
        letterGrade = 'B-'
    }
    else if (total >= 77 & total < 80) {
        letterGrade = 'C+'
    }
    else if (total >= 74 & total < 77) {
        letterGrade = 'C'
    }
    else if (total >= 70 & total < 74) {
        letterGrade = 'C-'
    }
    else if (total >= 67 & total < 70) {
        letterGrade = 'D+'
    }
    else if (total >= 64 & total < 67) {
        letterGrade = 'D'
    }
    else if (total >= 60 & total < 64) {
        letterGrade = 'D-'
    }
    else {
        letterGrade = 'E'
    }

    // assign total and letterGrade back to html input field with type percent
    $("#percent").val(total + ' ' + letterGrade)
})