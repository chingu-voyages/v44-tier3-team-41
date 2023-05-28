export default function Footer() {
	return (
		<footer
			className="bg-[#fafafa]"
			aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto px-6 pb-8 pt-6 sm:pt-24 lg:px-8 lg:pt-6">
				<div className="">
					<div className="flex">
						<a href="/" className="">
							<img
								className="h-12"
								src="https://res.cloudinary.com/yilin1234/image/upload/v1684821275/dm_logo_clear_w1sleb.png"
								alt="DM Logo"
							/>
						</a>
						<p className="text-xs text-gray-400 pl-5 py-4">
							Platform for aspiring software
							developers to connect with Mentors.
						</p>
					</div>
				</div>
				<div className="mt-4 border-t border-gray-900/10 pb-8 sm:mt-3 lg:mt-4">
					<p className="text-xs leading-5 text-gray-500 pt-4">
						&copy; 2023 DevelopMe. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
