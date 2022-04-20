// phần details
let listDivImg = document.querySelectorAll('.list-img div')
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let imgWrap = document.querySelector('.img-wrap img')

let currentIndex = 0

setCurrent(currentIndex)

function setCurrent(index) {
	currentIndex = index
	imgWrap.src = listDivImg[currentIndex].querySelector('img').src

	// remove all active img
	listDivImg.forEach((item) => {
		item.classList.remove('active')
	})

	// set active
	listDivImg[currentIndex].classList.add('active')
}

listDivImg.forEach((img, index) => {
	img.addEventListener('click', (e) => {
		setCurrent(index)
	})
})

next.addEventListener('click', () => {
	if (currentIndex == listDivImg.length - 1) {
		currentIndex = 0
	} else currentIndex++

	setCurrent(currentIndex)
})

prev.addEventListener('click', () => {
	if (currentIndex == 0) currentIndex = listDivImg.length - 1
	else currentIndex--

	setCurrent(currentIndex)
})
// phần comment
function taoBlog(nameUser,comment){
	var blog = new Object();
	blog.name = nameUser;
	blog.comment = comment;

	return blog;
}

function luuListBlog(blogList){
	var jsonBlogList = JSON.stringify(blogList);
	localStorage.setItem(keyBlog, jsonBlogList);
}

function layListBlog(){
	var blogList = new Array();
	var jsonBlogList = localStorage.setItem(keyBlog);

	if(jsonBlogList != null){
		blogList = JSON.parse(jsonBlogList);
	}
	return blogList;
}

function layListBlogFromLocaStorage(){
	var jsonBlogList = localStorage.getItem('blogList');
	var blogList = JSON.parse(jsonBlogList);
	return blogList;
}
