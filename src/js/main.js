let burgerBtn,
	burgerX,
	navMobile,
	navBgStripe,
	navMobileLinks,
	navMobileLinksBox,
	navDesktopLinksActive,
	html,
	navDesktop,
	mainHeader,
	sections,
	body

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()

	handleNavLinksOffset()
	handleScrollPadding()
	scrollSpy()
}

const prepareDOMElements = () => {
	burgerBtn = document.querySelector('.hamburger')
	burgerX = document.querySelector('.x-btn')
	navMobile = document.querySelector('.nav-mobile__bg')
	navDesktop = document.querySelector('.nav-desktop')
	navBgStripe = document.querySelector('.nav-mobile__bg-stripe')
	navMobileLinks = document.querySelectorAll('.nav-mobile__link')
	navMobileLinksBox = document.querySelector('.nav-mobile__links')
	navDesktopLinksActive = document.querySelectorAll('.nav-desktop__link--active')
	mainHeader = document.querySelector('.header')
	sections = document.querySelectorAll('.main section')
	html = document.querySelector('html')
	body = document.querySelector('body')
}

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', handleNav)
	burgerX.addEventListener('click', handleNav)
	navMobileLinks.forEach(link => link.addEventListener('click', handleNav))

	window.addEventListener('scroll', handleScrollPadding)
	window.addEventListener('scroll', scrollSpy)

	window.addEventListener('resize', handleNavLinksOffset)
	window.addEventListener('resize', handleNavResize)
}

const handleNavLinksOffset = () => {
	navMobileLinksBox.style.top = navBgStripe.offsetHeight + 'px'
}

const handleNavResize = () => {
	let screenWidth = document.documentElement.clientWidth
	if (screenWidth >= 768) {
		burgerBtn.classList.remove('burger-inactive')
		burgerX.classList.add('burger-inactive')
		navMobile.classList.remove('translate-zero')
		navMobile.classList.remove('opacity-1')
	}
}

const handleNav = () => {
	burgerBtn.classList.toggle('burger-inactive')
	burgerX.classList.toggle('burger-inactive')
	navMobile.classList.toggle('translate-zero')
	navMobile.classList.toggle('opacity-1')
}

const handleScrollPadding = () => {
	let screenWidth = document.documentElement.clientWidth
	let navHeight = navDesktop.offsetHeight
	if (screenWidth >= 768) html.style.scrollPaddingTop = navHeight + 'px'
	else html.style.scrollPaddingTop = 0
}

const scrollSpy = () => {
	const allSections = [mainHeader, ...sections]
	const screenHeight = document.documentElement.clientHeight
	if (document.documentElement.clientWidth >= 768) {
		const navigationParameters = navDesktop.getBoundingClientRect()
		for (let i = 0; i < allSections.length; i++) {
			const sectionParameters = allSections[i].getBoundingClientRect()

			if(sectionParameters["top"] <= navigationParameters["height"] + screenHeight / 2  && -(sectionParameters["height"] - navigationParameters["height"]) + screenHeight / 2 <= sectionParameters["top"]) {
				navDesktopLinksActive[i].classList.add('visible')
				navDesktopLinksActive[i].classList.add('opacity-1')
			} else {
				navDesktopLinksActive[i].classList.remove('visible')
				navDesktopLinksActive[i].classList.remove('opacity-1')
			}
		}
	}
}

document.addEventListener('DOMContentLoaded', main)
