// place files you want to import through the `$lib` alias in this folder.
export function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}