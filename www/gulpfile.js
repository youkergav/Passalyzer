// Define import variables.
const gulp = require("gulp");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const htmlMin = require('gulp-htmlmin');
const cssMin = require("gulp-clean-css");
const jsMin = require("gulp-uglify");
const imgMin = require("gulp-imagemin");
const inlineMin = require('gulp-minify-inline');

// Define environment variables.
var dev = "private_html";
var prod = "public_html";

// Copy the API to distribution.
gulp.task("commitApi", function() {
	gulp.src(dev + "/passalyzer/**/*")
		.pipe(gulp.dest(prod + "/passalyzer"));
});

// Minimize and copy all PHP files to distribution.
gulp.task("commitPhp", function() {
	gulp.src([dev + "/**/*.php", dev + "/**/*.inc", "!" + dev + "/passalyzer/**/*.php"])
		.pipe(htmlMin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(inlineMin())
		.pipe(gulp.dest(prod));
});

// Convert, minimize and copy CSS files to distribution.
gulp.task("commitCss", function() {
	gulp.src(dev + "/scss/**/*.scss")
		.pipe(sass()).on("error", sass.logError)
		.pipe(cssMin())
		.pipe(concat("styles.min.css"))
		.pipe(gulp.dest(prod + "/css"));
});

// Minimize and copy JavaScript files to distribution.
gulp.task("commitJs", function() {
	gulp.src(dev + "/js/**/*.js")
		.pipe(jsMin())
		.pipe(gulp.dest(prod + "/js"));
});

// Minimize and copy images to distribution.
gulp.task("commitImages", function() {
	gulp.src(dev + "/images/**/*")
		.pipe(imgMin())
		.pipe(gulp.dest(prod + "/images"));
});

// Copy the dependencies to the distribution.
gulp.task("commitDepends", function() {
	 // Bootstrap
	 var path = "node_modules/bootstrap";
	 gulp.src(path + "/scss/bootstrap.scss")
	 	.pipe(sass()).on("error", sass.logError)
	 	.pipe(cssMin())
	 	.pipe(rename("bootstrap.min.css"))
	 	.pipe(gulp.dest(prod + "/css"));
	 gulp.src([path + "/dist/js/bootstrap.min.js", "node_modules/popper.js/dist/umd/popper.min.js"])
	 	.pipe(concat("bootstrap.min.js"))
	 	.pipe(gulp.dest(prod + "/js"));

	 // Font Awesome
	 var path = "node_modules/@fortawesome/fontawesome-free-webfonts";
	 gulp.src([path + "/scss/fontawesome.scss", path + "/scss/fa-brands.scss", path + "/scss/fa-regular.scss", path + "/scss/fa-solid.scss"])
	 	.pipe(sass()).on("error", sass.logError)
	 	.pipe(cssMin())
	 	.pipe(concat("fontawesome.min.css"))
	 	.pipe(gulp.dest(prod + "/css"));
	 gulp.src(path + "/webfonts/**/*")
	 	.pipe(gulp.dest(prod + "/fonts"));

	 // Cryptocoins
	 var path = "node_modules/cryptocoins-icons/webfont";
	 gulp.src(path + "/cryptocoins.css")
	 	.pipe(sass()).on("error", sass.logError)
	 	.pipe(cssMin())
	 	.pipe(rename("cryptocoins.min.css"))
	 	.pipe(gulp.dest(prod + "/css"))
	 gulp.src([path + "/cryptocoins.ttf", path + "/cryptocoins.woff", path + "/cryptocoins.woff2"])
	 	.pipe(gulp.dest(prod + "/fonts"));

	 // jQuery
	 var path = "node_modules/jquery";
	 gulp.src(path + "/dist/jquery.min.js")
	 	.pipe(gulp.dest(prod + "/js"));
});

// Commit all files to distribution.
gulp.task("commit", ["commitApi", "commitPhp", "commitCss", "commitJs", "commitImages"]);

// Watch files to commit.
gulp.task("watch", function() {
	gulp.watch(dev + "/passalyzer/**/*", ["commitApi"])
	gulp.watch([dev + "/**/*.php", dev + "/**/*.inc", "!" + dev + "/passalyzer/**/*.php"], ["commitPhp"])
	gulp.watch(dev + "/scss/*.scss", ["commitCss"])
	gulp.watch(dev + "/js/*.js", ["commitJs"])
	gulp.watch(dev + "/images/*.", ["commitImages"]);
});

gulp.task("watchDepends", function() {
	gulp.watch(["node_modules/bootstrap/scss/bootstrap.scss"], ["commitDepends"])
	gulp.watch(["node_modules/@fortawesome/fontawesome-free-webfonts/scss/font-awesome.scss"], ["commitDepends"])
});

// Default task.
gulp.task("default", ["commit", "commitDepends", "watch", "watchDepends"]);