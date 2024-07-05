const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-gray-500 px-2 py-8">
			<div className="mx-auto max-w-screen-xl text-xs opacity-70">
				<p className="mb-6">
					Copyright © {currentYear} chronosgit. All rights reserved
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
					quo, eaque quae dolorum quaerat quas aspernatur perspiciatis illum
					tempora molestiae laborum temporibus est repellendus saepe quisquam
					nobis totam! Commodi, nobis. Doloremque reiciendis officia repellendus
					aliquid a aut? Reprehenderit asperiores ipsum maiores consectetur iure
					earum voluptates in, laboriosam tempora enim doloremque veritatis
					ullam dolores culpa temporibus sequi voluptate eaque ad sit. Culpa
					laboriosam sed quibusdam consequatur aperiam ut? Itaque animi facere
					sint eius ex! Quisquam laboriosam voluptatum officia ipsa eos cum
					quasi. Quo voluptates cum ipsa rem deserunt inventore vitae
					perspiciatis!
				</p>
			</div>
		</footer>
	);
};

export default Footer;
