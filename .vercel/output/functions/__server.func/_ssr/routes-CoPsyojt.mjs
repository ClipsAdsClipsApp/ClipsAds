import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CoPsyojt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatCount(n) {
	if (n >= 1e6) return `${(n / 1e6).toFixed(1).replace(/\.0$/, "")}M`;
	if (n >= 1e3) return `${(n / 1e3).toFixed(1).replace(/\.0$/, "")}K`;
	return String(n);
}
function formatPrice(amount, currency) {
	return new Intl.NumberFormat(currency === "EUR" ? "es-ES" : "en-US", {
		style: "currency",
		currency,
		maximumFractionDigits: 2
	}).format(amount);
}
function percent(part, total) {
	if (total <= 0) return 0;
	return Math.round(part / total * 100);
}
function Svg({ className, size = 22, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.75",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		className: cn("shrink-0", className),
		"aria-hidden": true,
		children
	});
}
function IconHome(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 10.5 12 4l8 6.5V20a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 20z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.5 21.5v-7h5v7" })]
	});
}
function IconCompass(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "9"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m15.6 8.4-2 6.2-6.2 2 2-6.2z" })]
	});
}
function IconPlusBox(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "4",
			y: "4",
			width: "16",
			height: "16",
			rx: "5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 8.5v7M8.5 12h7" })]
	});
}
function IconClips(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "6",
				width: "12",
				height: "12",
				rx: "3.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "8.5",
				width: "12",
				height: "12",
				rx: "3.2",
				opacity: ".45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "m10.6 10.8 4.4 2.6-4.4 2.6z",
				fill: "currentColor",
				stroke: "none"
			})
		]
	});
}
function IconUser(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "8.2",
			r: "3.2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5.5 19.2c1.2-3.1 3.4-4.6 6.5-4.6s5.3 1.5 6.5 4.6" })]
	});
}
function IconCart(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 6.5h1.6l1.4 9.2h9.7l1.6-6.6H8" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10",
				cy: "18.6",
				r: "1.2",
				fill: "currentColor",
				stroke: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "16.2",
				cy: "18.6",
				r: "1.2",
				fill: "currentColor",
				stroke: "none"
			})
		]
	});
}
function IconSound({ muted, ...p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.5 9.5h3.2L12 6v12l-4.3-3.5H4.5z" }), muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m16 10 4 4m0-4-4 4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.3 9.2a3.4 3.4 0 0 1 0 5.6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.6 7a6 6 0 0 1 0 10" })] })]
	});
}
function IconPlay(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "m9 7.5 9 4.5-9 4.5z",
			fill: "currentColor",
			stroke: "none"
		})
	});
}
function IconCheck(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m5.5 12.5 4.2 4.2 8.8-9.4" })
	});
}
function IconFlask(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 4h6M10 4v4.2L6.4 18.2A2.2 2.2 0 0 0 8.4 21h7.2a2.2 2.2 0 0 0 2-2.8L14 8.2V4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8.4 15h7.2" })]
	});
}
function IconTarget(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "1.2",
				fill: "currentColor",
				stroke: "none"
			})
		]
	});
}
function IconPin(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0 0 5.5 10.8C5.5 15.6 12 21 12 21z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "10.4",
			r: "2"
		})]
	});
}
function IconSearch(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "11",
			cy: "11",
			r: "6.2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m16 16 3.4 3.4" })]
	});
}
function IconClose(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 6 6 18" })
	});
}
function IconShield(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3.5 19.5 6v6.2c0 4.4-3 6.8-7.5 8.3C8 19 5.5 16.6 5.5 12.2V6z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 12 2.1 2.1L15.4 10" })]
	});
}
function IconStar({ filled, ...p }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Svg, {
		...p,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "m12 3.6 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.3 7.2 18.5l.9-5.4-3.9-3.8 5.4-.8z",
			fill: filled ? "currentColor" : "none"
		})
	});
}
function IconInfo(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "12",
			cy: "12",
			r: "8.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 11v5M12 8.2v.2" })]
	});
}
function IconPhone(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 3.5h8A2.5 2.5 0 0 1 18.5 6v12a2.5 2.5 0 0 1-2.5 2.5H8A2.5 2.5 0 0 1 5.5 18V6A2.5 2.5 0 0 1 8 3.5z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M10 18.5h4" })]
	});
}
function IconChart(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 19h14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 16v-4M12 16V8M17 16v-7" })]
	});
}
function IconLogout(p) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
		...p,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 5h3.5A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5H14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 12H4.5M7 8.5 4.5 12 7 15.5" })]
	});
}
var ACTION_ICONS = {
	like: "/icons/like.png",
	comment: "/icons/comment.png",
	save: "/icons/save.png",
	share: "/icons/share.png",
	more: "/icons/more.png"
};
/** 3D glossy tile matching the ClipsApp logo. */
function BrandActionIcon({ kind, active, size = 46, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("relative grid place-items-center transition-transform duration-150", active && "scale-[1.05]"),
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: ACTION_ICONS[kind],
			alt: label,
			width: size,
			height: size,
			draggable: false,
			className: cn("pointer-events-none size-full object-contain", active ? "drop-shadow-[0_0_12px_rgb(0_255_136_/_0.7)]" : "drop-shadow-[0_4px_10px_rgb(0_229_255_/_0.32)]")
		}), active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute right-0.5 bottom-0.5 grid size-3.5 place-items-center rounded-full bg-mint text-bg shadow-[0_0_8px_rgb(0_255_136_/_0.75)]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "8",
				height: "8",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "4.5",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				"aria-hidden": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m5 12.5 4.2 4.2 9.2-10" })
			})
		}) : null]
	});
}
var CATEGORIES = [
	{
		id: "tech",
		name: "Tecnología",
		blurb: "Auriculares, móviles y gadgets"
	},
	{
		id: "restaurants",
		name: "Restauración",
		blurb: "Cafés, bares y menú del día"
	},
	{
		id: "beauty",
		name: "Belleza",
		blurb: "Cuidado, estética y barberías"
	},
	{
		id: "sport",
		name: "Deporte",
		blurb: "Gimnasios, running y clases"
	},
	{
		id: "food",
		name: "Alimentación",
		blurb: "Productos y comercios de barrio"
	},
	{
		id: "home",
		name: "Hogar",
		blurb: "Electrodomésticos y casa"
	},
	{
		id: "fashion",
		name: "Moda",
		blurb: "Ropa, zapatillas y estilo"
	},
	{
		id: "leisure",
		name: "Ocio",
		blurb: "Planes y experiencias locales"
	},
	{
		id: "baby",
		name: "Bebé",
		blurb: "Familia y primeros años"
	}
];
var CREATORS = [
	{
		id: "ana",
		username: "ana_tech",
		displayName: "Ana Tech",
		avatarUrl: "/avatars/ana.jpg",
		role: "creator",
		city: "Madrid",
		bio: "Reviews de audio y gadgets con prueba real.",
		followers: 12840,
		verified: true
	},
	{
		id: "mario",
		username: "mario_parla",
		displayName: "Mario Nexo",
		avatarUrl: "/avatars/mario.jpg",
		role: "business",
		city: "Parla",
		bio: "Café de especialidad a 8 minutos de la estación.",
		followers: 920,
		verified: true
	},
	{
		id: "diego",
		username: "diego_fade",
		displayName: "Diego Fade",
		avatarUrl: "/avatars/diego.jpg",
		role: "business",
		city: "Parla",
		bio: "Barbería Sur. Cortes, barba y cita rápida.",
		followers: 2104,
		verified: true
	},
	{
		id: "lucia",
		username: "lucia_glow",
		displayName: "Lucía Glow",
		avatarUrl: "/avatars/lucia.jpg",
		role: "creator",
		city: "Madrid",
		bio: "Piel real, sin filtros de marketing.",
		followers: 6400,
		verified: false
	},
	{
		id: "nuria",
		username: "nuria_fit",
		displayName: "Nuria Fit",
		avatarUrl: "/avatars/nuria.jpg",
		role: "creator",
		city: "Leganés",
		bio: "Clases y gimnasios del sur de Madrid.",
		followers: 3180,
		verified: true
	},
	{
		id: "pablo",
		username: "pablo_run",
		displayName: "Pablo Run",
		avatarUrl: "/avatars/pablo.jpg",
		role: "user",
		city: "Getafe",
		bio: "Corro 4 días y cuento lo que aguanta.",
		followers: 860,
		verified: false
	},
	{
		id: "sofia",
		username: "sofia_sabor",
		displayName: "Sofía Sabor",
		avatarUrl: "/avatars/sofia.jpg",
		role: "user",
		city: "Parla",
		bio: "Menús del día y sitios de barrio.",
		followers: 1540,
		verified: true
	}
];
var PRODUCTS = [
	{
		id: "headphones",
		name: "Audífonos Noise-Cancel Pro",
		brand: "SoundTech",
		description: "Cancelación activa, 32 h de batería y modo oficina. Pensados para metro, coworking y vuelos cortos.",
		price: 89.99,
		currency: "USD",
		category: "tech",
		city: "Madrid",
		distanceKm: 18,
		imageUrl: "/images/headphones.jpg",
		purchaseUrl: "https://example.com/soundtech",
		cta: "buy",
		ctaLabel: "Comprar ahora",
		fulfills: 88,
		wouldBuy: 75,
		verifiedOpinions: 132,
		rating: 4.6,
		pros: [
			"Cancelación estable en metro",
			"Almohadillas cómodas 2 h+",
			"App sencilla"
		],
		cons: ["El estuche ocupa bastante", "Graves un poco marcados"],
		faq: [{
			q: "¿Sirven para llamadas?",
			a: "Sí. El micrófono es correcto en calle, mejor en interior."
		}, {
			q: "¿Cuánto tarda en cargar?",
			a: "Carga rápida: 10 minutos dan unas 4 horas."
		}],
		alternatives: ["sneakers", "vacuum"],
		where: [
			"SoundTech.com",
			"MediaMarkt online",
			"Amazon"
		]
	},
	{
		id: "coffee",
		name: "Cappuccino de especialidad",
		brand: "Cafetería Nexo",
		description: "Grano de tueste propio, leche a 60º y terraza pequeña junto a la estación de Parla.",
		price: 3.5,
		currency: "EUR",
		category: "restaurants",
		city: "Parla",
		distanceKm: .8,
		imageUrl: "/images/coffee.jpg",
		address: "C. Real 18, Parla",
		phone: "916000111",
		cta: "book",
		ctaLabel: "Reservar mesa",
		fulfills: 91,
		wouldBuy: 84,
		verifiedOpinions: 64,
		rating: 4.8,
		pros: [
			"Leche texturizada de verdad",
			"WiFi y enchufes",
			"Personal que responde"
		],
		cons: ["Se llena a las 8:30", "Pocas mesas en terraza"],
		faq: [{
			q: "¿Hay opciones vegetales?",
			a: "Avena y soja sin recargo."
		}, {
			q: "¿Abren domingo?",
			a: "Sí, de 9:00 a 14:00."
		}],
		alternatives: ["tapas"],
		where: ["Cafetería Nexo · Parla"]
	},
	{
		id: "barber",
		name: "Corte fade + barba",
		brand: "Barbería Sur",
		description: "Cita de 35 minutos, fade limpio y arreglo de barba. Sin venta cruzada rara.",
		price: 18,
		currency: "EUR",
		category: "beauty",
		city: "Parla",
		distanceKm: 1.2,
		imageUrl: "/images/barber.jpg",
		address: "Av. Juan Carlos I 42, Parla",
		phone: "916000222",
		cta: "book",
		ctaLabel: "Pedir cita",
		fulfills: 86,
		wouldBuy: 79,
		verifiedOpinions: 48,
		rating: 4.5,
		pros: [
			"Puntuales",
			"Precio cerrado",
			"Acabado nítido"
		],
		cons: ["Sábados con lista de espera"],
		faq: [{
			q: "¿Aceptan walk-in?",
			a: "Solo entre semana, si hay hueco."
		}],
		alternatives: [],
		where: ["Barbería Sur · Parla"]
	},
	{
		id: "serum",
		name: "Sérum Vitamina C 15%",
		brand: "GlowLab",
		description: "Textura ligera para piel mixta. La creadora declara enlace de afiliado.",
		price: 24.9,
		currency: "EUR",
		category: "beauty",
		city: "Madrid",
		distanceKm: 22,
		imageUrl: "/images/serum.jpg",
		purchaseUrl: "https://example.com/glowlab",
		cta: "buy",
		ctaLabel: "Comprar en tienda",
		fulfills: 73,
		wouldBuy: 61,
		verifiedOpinions: 89,
		rating: 4.1,
		pros: ["No pica en piel sensible", "Envase opaco"],
		cons: ["Hay que ser constante 3 semanas"],
		faq: [{
			q: "¿Mancha la almohada?",
			a: "Si dejas secar 90 segundos, no."
		}],
		alternatives: [],
		where: ["GlowLab.es", "Sephora online"]
	},
	{
		id: "gym",
		name: "Clase de spinning 45'",
		brand: "FitHouse Leganés",
		description: "Sala pequeña, instructor con nombre y bicis que no crujen. Bono de 8 clases.",
		price: 12,
		currency: "EUR",
		category: "sport",
		city: "Leganés",
		distanceKm: 7.4,
		imageUrl: "/images/gym.jpg",
		address: "C. París 7, Leganés",
		phone: "916000333",
		cta: "book",
		ctaLabel: "Reservar clase",
		fulfills: 82,
		wouldBuy: 70,
		verifiedOpinions: 37,
		rating: 4.4,
		pros: ["Grupos de 16 máx.", "Duchas limpias"],
		cons: ["Parking de pago"],
		faq: [{
			q: "¿Primera clase gratis?",
			a: "Sí, con reserva previa."
		}],
		alternatives: ["sneakers"],
		where: ["FitHouse Leganés"]
	},
	{
		id: "sneakers",
		name: "Zapatillas Urban Run",
		brand: "Stride",
		description: "Para asfalto y un día de gym. Opinión orgánica de un usuario, no de marca.",
		price: 79,
		currency: "EUR",
		category: "fashion",
		city: "Getafe",
		distanceKm: 11,
		imageUrl: "/images/sneakers.jpg",
		purchaseUrl: "https://example.com/stride",
		cta: "buy",
		ctaLabel: "Ver disponibilidad",
		fulfills: 77,
		wouldBuy: 68,
		verifiedOpinions: 51,
		rating: 4.2,
		pros: ["Plantilla que no se aplasta", "Talla fiel"],
		cons: ["Se marcan con lluvia"],
		faq: [{
			q: "¿Sirven para 10 km?",
			a: "Sí, hasta ese rango. No para maratón."
		}],
		alternatives: ["gym"],
		where: ["Stride Store Madrid", "El Corte Inglés"]
	},
	{
		id: "tapas",
		name: "Menú del día",
		brand: "Taberna La Plaza",
		description: "Primer plato, segundo, postre y café. Cocina de mercado, no de turista.",
		price: 12.5,
		currency: "EUR",
		category: "restaurants",
		city: "Parla",
		distanceKm: .5,
		imageUrl: "/images/tapas.jpg",
		address: "Plaza de la Constitución 3, Parla",
		phone: "916000444",
		cta: "directions",
		ctaLabel: "Cómo llegar",
		fulfills: 90,
		wouldBuy: 88,
		verifiedOpinions: 71,
		rating: 4.7,
		pros: [
			"Ración generosa",
			"Precio cerrado",
			"Trato de barrio"
		],
		cons: ["No hay reserva a las 14:00"],
		faq: [{
			q: "¿Hay opción vegetariana?",
			a: "Cada día un primero y un segundo."
		}],
		alternatives: ["coffee"],
		where: ["Taberna La Plaza · Parla"]
	},
	{
		id: "vacuum",
		name: "Robot aspirador Pulse 2",
		brand: "HomePulse",
		description: "Campaña de marca. Mapeo, mop ligero y estación. Etiquetado como contenido patrocinado.",
		price: 199,
		currency: "EUR",
		category: "home",
		city: "Madrid",
		distanceKm: 19,
		imageUrl: "/images/vacuum.jpg",
		purchaseUrl: "https://example.com/homepulse",
		cta: "buy",
		ctaLabel: "Comprar ahora",
		fulfills: 69,
		wouldBuy: 58,
		verifiedOpinions: 44,
		rating: 3.9,
		pros: ["App clara", "Pasa bajo el sofá"],
		cons: ["El mop no sustituye fregona", "Ruidoso en baldosa"],
		faq: [{
			q: "¿Sube alfombras?",
			a: "Alfombras bajas sí; shaggy no."
		}],
		alternatives: ["headphones"],
		where: ["HomePulse", "PcComponentes"]
	}
];
var CLIPS = [
	{
		id: "c1",
		videoUrl: "/videos/headphones.mp4",
		posterUrl: "/images/headphones.jpg",
		caption: "14 días con ellos en el Cercanías. La cancelación aguanta.",
		authorId: "ana",
		productId: "headphones",
		disclosure: "verified_purchase",
		daysUsed: 14,
		likes: 2400,
		comments: 312,
		saves: 586,
		shares: 241,
		fulfillsYes: 116,
		fulfillsMid: 10,
		fulfillsNo: 6,
		wouldYes: 99,
		wouldNo: 33,
		local: false,
		sponsored: false,
		createdAt: Date.now() - 1728e5
	},
	{
		id: "c2",
		videoUrl: "/videos/coffee.mp4",
		posterUrl: "/images/coffee.jpg",
		caption: "El cappuccino de Nexo, a 8 min de la estación de Parla.",
		authorId: "mario",
		productId: "coffee",
		disclosure: "local",
		likes: 840,
		comments: 46,
		saves: 190,
		shares: 38,
		fulfillsYes: 58,
		fulfillsMid: 4,
		fulfillsNo: 2,
		wouldYes: 54,
		wouldNo: 10,
		local: true,
		sponsored: false,
		createdAt: Date.now() - 864e5
	},
	{
		id: "c3",
		videoUrl: "/videos/barber.mp4",
		posterUrl: "/images/barber.jpg",
		caption: "Fade + barba por 18 €. Cita online, sin sorpresas.",
		authorId: "diego",
		productId: "barber",
		disclosure: "local",
		likes: 560,
		comments: 29,
		saves: 102,
		shares: 21,
		fulfillsYes: 41,
		fulfillsMid: 5,
		fulfillsNo: 2,
		wouldYes: 38,
		wouldNo: 10,
		local: true,
		sponsored: false,
		createdAt: Date.now() - 2592e5
	},
	{
		id: "c4",
		videoUrl: "/videos/serum.mp4",
		posterUrl: "/images/serum.jpg",
		caption: "3 semanas de vitamina C. Hay enlace de afiliado, lo digo claro.",
		authorId: "lucia",
		productId: "serum",
		disclosure: "affiliate",
		daysUsed: 21,
		likes: 1900,
		comments: 88,
		saves: 410,
		shares: 70,
		fulfillsYes: 65,
		fulfillsMid: 18,
		fulfillsNo: 6,
		wouldYes: 54,
		wouldNo: 35,
		local: false,
		sponsored: false,
		createdAt: Date.now() - 3456e5
	},
	{
		id: "c5",
		videoUrl: "/videos/gym.mp4",
		posterUrl: "/images/gym.jpg",
		caption: "Spinning en Leganés: grupos pequeños y bici que no cruje.",
		authorId: "nuria",
		productId: "gym",
		disclosure: "verified_purchase",
		daysUsed: 30,
		likes: 720,
		comments: 34,
		saves: 156,
		shares: 19,
		fulfillsYes: 30,
		fulfillsMid: 5,
		fulfillsNo: 2,
		wouldYes: 26,
		wouldNo: 11,
		local: true,
		sponsored: false,
		createdAt: Date.now() - 432e6
	},
	{
		id: "c6",
		posterUrl: "/images/sneakers.jpg",
		caption: "160 km con las Urban Run. Opinión mía, nadie me las envió.",
		authorId: "pablo",
		productId: "sneakers",
		disclosure: "organic",
		daysUsed: 40,
		likes: 430,
		comments: 22,
		saves: 97,
		shares: 14,
		fulfillsYes: 39,
		fulfillsMid: 8,
		fulfillsNo: 4,
		wouldYes: 35,
		wouldNo: 16,
		local: false,
		sponsored: false,
		createdAt: Date.now() - 5184e5
	},
	{
		id: "c7",
		posterUrl: "/images/tapas.jpg",
		caption: "Menú del día a 12,50 € en La Plaza. Esto sí es barrio.",
		authorId: "sofia",
		productId: "tapas",
		disclosure: "local",
		likes: 1100,
		comments: 57,
		saves: 248,
		shares: 44,
		fulfillsYes: 64,
		fulfillsMid: 5,
		fulfillsNo: 2,
		wouldYes: 62,
		wouldNo: 9,
		local: true,
		sponsored: false,
		createdAt: Date.now() - 864e5
	},
	{
		id: "c8",
		posterUrl: "/images/vacuum.jpg",
		caption: "Campaña con HomePulse. El robot mapea bien; el mop es regular.",
		authorId: "ana",
		productId: "vacuum",
		disclosure: "sponsored",
		daysUsed: 10,
		likes: 980,
		comments: 71,
		saves: 133,
		shares: 28,
		fulfillsYes: 30,
		fulfillsMid: 9,
		fulfillsNo: 5,
		wouldYes: 26,
		wouldNo: 18,
		local: false,
		sponsored: true,
		createdAt: Date.now() - 1296e5
	}
];
var COMMENTS = [
	{
		id: "m1",
		clipId: "c1",
		username: "sofia",
		text: "Se ve muy cómodo. ¿Aguantan el metro en hora punta?",
		createdAt: Date.now() - 36e5
	},
	{
		id: "m2",
		clipId: "c1",
		username: "marcos",
		text: "¿Alguien ya lo probó más de una semana?",
		createdAt: Date.now() - 72e5
	},
	{
		id: "m3",
		clipId: "c1",
		username: "vale",
		text: "Me interesa bastante para la oficina.",
		createdAt: Date.now() - 108e5
	},
	{
		id: "m4",
		clipId: "c2",
		username: "ana_tech",
		text: "Confirmado: avena sin recargo. Café redondo.",
		createdAt: Date.now() - 54e5
	},
	{
		id: "m5",
		clipId: "c7",
		username: "mario_parla",
		text: "El primero de lentejas de los jueves es el que hay que pedir.",
		createdAt: Date.now() - 4e6
	}
];
var REVIEWS = [
	{
		id: "r1",
		productId: "headphones",
		username: "ana_tech",
		rating: 5,
		text: "Compra verificada. 14 días de uso diario en Cercanías y llamadas.",
		verified: true,
		daysUsed: 14
	},
	{
		id: "r2",
		productId: "headphones",
		username: "pablo_run",
		rating: 4,
		text: "Buenos, un poco pesados al tercer hora.",
		verified: true,
		daysUsed: 8
	},
	{
		id: "r3",
		productId: "coffee",
		username: "sofia_sabor",
		rating: 5,
		text: "El cappuccino más honesto de Parla que he pagado.",
		verified: true
	}
];
var DEMO_USER = {
	id: "me",
	username: "usuario",
	displayName: "Alex",
	email: "alex@clips.app",
	avatarUrl: "/avatars/user.jpg",
	role: "user",
	ageRange: "25-34",
	gender: "prefer_not",
	city: "Parla",
	interests: [
		"tech",
		"restaurants",
		"beauty",
		"sport"
	],
	personalizeAds: true,
	approximateLocation: true
};
var KEY = "clipsapp-demo-v1";
function save(part) {
	if (typeof window === "undefined") return;
	const data = {
		user: part.user,
		clips: part.clips,
		products: part.products,
		comments: part.comments,
		liked: part.liked,
		saved: part.saved,
		following: part.following,
		hidden: part.hidden,
		tried: part.tried,
		would: part.would,
		fulfills: part.fulfills
	};
	localStorage.setItem(KEY, JSON.stringify(data));
}
var empty = {
	user: null,
	clips: CLIPS,
	products: PRODUCTS,
	comments: COMMENTS,
	liked: [],
	saved: [],
	following: [],
	hidden: [],
	tried: {},
	would: {},
	fulfills: {}
};
var useApp = create((set, get) => ({
	...empty,
	ready: false,
	tab: "home",
	feedMode: "for-you",
	activeClipId: CLIPS[0]?.id ?? "c1",
	sheet: null,
	sheetClipId: null,
	toast: null,
	soundOn: false,
	hydrate: () => {
		let loaded = empty;
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				loaded = {
					...empty,
					...parsed,
					clips: parsed.clips?.length ? parsed.clips : CLIPS,
					products: parsed.products?.length ? parsed.products : PRODUCTS,
					comments: parsed.comments?.length ? parsed.comments : COMMENTS
				};
			}
		} catch {
			loaded = empty;
		}
		set({
			...loaded,
			ready: true
		});
	},
	persist: () => {
		save(get());
	},
	toastMsg: (msg) => {
		set({ toast: msg });
		window.setTimeout(() => {
			if (get().toast === msg) set({ toast: null });
		}, 1800);
	},
	login: (user) => {
		set({
			user,
			tab: "home"
		});
		get().persist();
		get().toastMsg(`Hola, @${user.username}`);
	},
	logout: () => {
		set({
			user: null,
			tab: "home",
			sheet: null
		});
		get().persist();
	},
	updateUser: (patch) => {
		const user = get().user;
		if (!user) return;
		set({ user: {
			...user,
			...patch
		} });
		get().persist();
	},
	setTab: (tab) => set({
		tab,
		sheet: null
	}),
	setFeedMode: (feedMode) => set({ feedMode }),
	setActiveClip: (activeClipId) => set({ activeClipId }),
	openSheet: (sheet, clipId) => set({
		sheet,
		sheetClipId: clipId ?? get().activeClipId
	}),
	closeSheet: () => set({ sheet: null }),
	toggleSound: () => set((s) => ({ soundOn: !s.soundOn })),
	toggleLike: (clipId) => {
		const liked = new Set(get().liked);
		const clips = get().clips.map((c) => {
			if (c.id !== clipId) return c;
			const on = liked.has(clipId);
			if (on) liked.delete(clipId);
			else liked.add(clipId);
			return {
				...c,
				likes: c.likes + (on ? -1 : 1)
			};
		});
		set({
			liked: [...liked],
			clips
		});
		get().persist();
	},
	toggleSave: (clipId) => {
		const saved = new Set(get().saved);
		const on = saved.has(clipId);
		if (on) saved.delete(clipId);
		else saved.add(clipId);
		const clips = get().clips.map((c) => c.id === clipId ? {
			...c,
			saves: c.saves + (on ? -1 : 1)
		} : c);
		set({
			saved: [...saved],
			clips
		});
		get().persist();
		get().toastMsg(on ? "Quitado de guardados" : "Clip guardado");
	},
	toggleFollow: (authorId) => {
		const following = new Set(get().following);
		const on = following.has(authorId);
		if (on) following.delete(authorId);
		else following.add(authorId);
		set({ following: [...following] });
		get().persist();
		get().toastMsg(on ? "Has dejado de seguir" : "Ahora sigues esta cuenta");
	},
	addComment: (clipId, text) => {
		const user = get().user;
		if (!user) return;
		set({
			comments: [{
				id: `cm-${Date.now()}`,
				clipId,
				username: user.username,
				text,
				createdAt: Date.now()
			}, ...get().comments],
			clips: get().clips.map((c) => c.id === clipId ? {
				...c,
				comments: c.comments + 1
			} : c)
		});
		get().persist();
		get().toastMsg("Comentario publicado");
	},
	setTried: (clipId, value) => {
		set({
			tried: {
				...get().tried,
				[clipId]: value
			},
			sheet: null
		});
		get().persist();
		get().toastMsg(value === "verified" ? "Tester verificado" : value === "casual" ? "Marcado como probado" : "Marcado como no probado");
	},
	voteWould: (clipId, value) => {
		const prev = get().would[clipId];
		const clips = get().clips.map((c) => {
			if (c.id !== clipId) return c;
			let wouldYes = c.wouldYes;
			let wouldNo = c.wouldNo;
			if (prev === "yes") wouldYes -= 1;
			if (prev === "no") wouldNo -= 1;
			if (value === "yes") wouldYes += 1;
			else wouldNo += 1;
			return {
				...c,
				wouldYes,
				wouldNo
			};
		});
		set({
			would: {
				...get().would,
				[clipId]: value
			},
			clips,
			sheet: null
		});
		get().persist();
		get().toastMsg("Voto registrado");
	},
	voteFulfills: (clipId, value) => {
		const prev = get().fulfills[clipId];
		const weight = get().tried[clipId] === "verified" ? 3 : 1;
		const clips = get().clips.map((c) => {
			if (c.id !== clipId) return c;
			const next = { ...c };
			const sub = (k) => {
				next[k] = Math.max(0, next[k] - weight);
			};
			if (prev === "yes") sub("fulfillsYes");
			if (prev === "mid") sub("fulfillsMid");
			if (prev === "no") sub("fulfillsNo");
			if (value === "yes") next.fulfillsYes += weight;
			if (value === "mid") next.fulfillsMid += weight;
			if (value === "no") next.fulfillsNo += weight;
			return next;
		});
		set({
			fulfills: {
				...get().fulfills,
				[clipId]: value
			},
			clips,
			sheet: null
		});
		get().persist();
		get().toastMsg(get().tried[clipId] === "verified" ? "Veredicto con peso de tester" : "Veredicto registrado");
	},
	hideClip: (clipId) => {
		set({
			hidden: [.../* @__PURE__ */ new Set([...get().hidden, clipId])],
			sheet: null
		});
		get().persist();
		get().toastMsg("Clip ocultado");
	},
	shareClip: async (clipId) => {
		set({ clips: get().clips.map((c) => c.id === clipId ? {
			...c,
			shares: c.shares + 1
		} : c) });
		get().persist();
		try {
			if (navigator.share) await navigator.share({
				title: "ClipsApp",
				text: "Mira este clip en ClipsApp",
				url: location.href
			});
			else {
				await navigator.clipboard.writeText(location.href);
				get().toastMsg("Enlace copiado");
			}
		} catch {
			get().toastMsg("Compartir cancelado");
		}
	},
	publishClip: (clip, product) => {
		set({
			clips: [clip, ...get().clips],
			products: product ? [product, ...get().products] : get().products,
			activeClipId: clip.id,
			tab: "home",
			sheet: null
		});
		get().persist();
		get().toastMsg("Clip publicado");
	}
}));
function LogoMark({ size = 38 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/logo.jpg",
		alt: "ClipsApp",
		width: size,
		height: size,
		className: "rounded-[12px] border border-cyan/40 object-cover shadow-[0_4px_16px_rgb(0_229_255_/_0.28)]"
	});
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("font-display text-lg font-extrabold tracking-tight", className),
		children: ["Clips", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-cyan",
			children: "App"
		})]
	});
}
function PhoneFrame({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-[#050508] p-0 sm:p-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-dvh w-full overflow-hidden bg-bg sm:h-[min(880px,calc(100dvh-24px))] sm:w-[390px] sm:rounded-[38px] sm:border-[8px] sm:border-[#25252c] sm:shadow-[0_25px_70px_#000]",
			children
		})
	});
}
function ToastHost() {
	const toast = useApp((s) => s.toast);
	if (!toast) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "toast-in pointer-events-none absolute bottom-28 left-1/2 z-50 -translate-x-1/2 rounded-[12px] bg-fg px-3.5 py-2.5 text-center text-xs font-extrabold text-bg",
		children: toast
	});
}
function Sheet({ open, title, onClose, children }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-40 flex items-end bg-black/55 backdrop-blur-[4px]",
		onClick: (e) => {
			if (e.target === e.currentTarget) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rise-in max-h-[82%] w-full overflow-auto rounded-t-[25px] bg-surface px-4 pb-[calc(18px+env(safe-area-inset-bottom))] pt-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-3 h-1 w-10 rounded-full bg-fg/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold",
						children: title
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "grid size-9 place-items-center rounded-full text-muted hover:bg-fg/5",
						"aria-label": "Cerrar",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconClose, { size: 18 })
					})]
				}),
				children
			]
		})
	});
}
var NAV = [
	{
		id: "home",
		label: "Inicio",
		icon: IconHome
	},
	{
		id: "explore",
		label: "Explorar",
		icon: IconCompass
	},
	{
		id: "create",
		label: "Publicar",
		icon: IconPlusBox
	},
	{
		id: "clips",
		label: "Mis clips",
		icon: IconClips
	},
	{
		id: "profile",
		label: "Perfil",
		icon: IconUser
	}
];
function BottomNav() {
	const tab = useApp((s) => s.tab);
	const setTab = useApp((s) => s.setTab);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "absolute inset-x-0 bottom-0 z-20 flex justify-around border-t border-line bg-bg/90 px-1 pb-[calc(6px+env(safe-area-inset-bottom))] pt-1.5 backdrop-blur-xl",
		children: NAV.map((item) => {
			const on = tab === item.id;
			const Icon = item.icon;
			const isCreate = item.id === "create";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setTab(item.id),
				className: cn("flex min-w-12 flex-col items-center gap-0.5 px-2 py-1 text-[10px] font-semibold", on ? "text-fg" : "text-subtle"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid size-10 place-items-center rounded-[14px]", isCreate && "border border-cyan text-cyan", on && !isCreate && "text-cyan"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: isCreate ? 22 : 21 })
				}), item.label]
			}, item.id);
		})
	});
}
function OptionButton({ children, onClick, variant = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("mb-2 w-full rounded-[13px] px-3.5 py-3.5 text-left text-sm font-semibold transition-transform duration-150 active:scale-[0.98]", variant === "default" && "border border-line bg-surface-2 text-fg", variant === "primary" && "bg-cyan text-bg", variant === "mint" && "bg-mint text-bg", variant === "ghost" && "bg-fg/5 text-muted"),
		children
	});
}
function creatorById(id) {
	return CREATORS.find((c) => c.id === id) ?? CREATORS[0];
}
function productById(id, extras = []) {
	return extras.find((p) => p.id === id) ?? PRODUCTS.find((p) => p.id === id) ?? PRODUCTS[0];
}
function clipAuthor(id, me) {
	if (id === "me-local" && me) return {
		id: "me-local",
		username: me.username,
		displayName: me.displayName,
		avatarUrl: me.avatarUrl,
		role: me.role,
		city: me.city,
		bio: "Tu cuenta",
		followers: 0,
		verified: false
	};
	return creatorById(id);
}
function useProduct(id) {
	return productById(id, useApp((s) => s.products));
}
function useAuthor(id) {
	return clipAuthor(id, useApp((s) => s.user));
}
function clipStats(clip) {
	const fTotal = clip.fulfillsYes + clip.fulfillsMid + clip.fulfillsNo;
	const wTotal = clip.wouldYes + clip.wouldNo;
	return {
		fulfills: percent(clip.fulfillsYes + clip.fulfillsMid * .5, fTotal),
		wouldBuy: percent(clip.wouldYes, wTotal),
		verifiedWeight: fTotal
	};
}
var DISCLOSURE_LABEL = {
	organic: "Opinión orgánica",
	verified_purchase: "Compra verificada",
	sponsored: "Contenido patrocinado",
	affiliate: "Enlace de afiliado",
	gifted: "Producto recibido",
	local: "Negocio local"
};
var DISCLOSURE_HINT = {
	organic: "Nadie pagó esta reseña.",
	verified_purchase: "La compra o el ticket está comprobado.",
	sponsored: "La marca pagó este clip.",
	affiliate: "Si compras, la creadora puede recibir comisión.",
	gifted: "La marca envió el producto sin cobro.",
	local: "Comercio de proximidad verificado."
};
function Feed() {
	const clips = useApp((s) => s.clips);
	const hidden = useApp((s) => s.hidden);
	const user = useApp((s) => s.user);
	const feedMode = useApp((s) => s.feedMode);
	const setFeedMode = useApp((s) => s.setFeedMode);
	const setActiveClip = useApp((s) => s.setActiveClip);
	const activeClipId = useApp((s) => s.activeClipId);
	const soundOn = useApp((s) => s.soundOn);
	const toggleSound = useApp((s) => s.toggleSound);
	const setTab = useApp((s) => s.setTab);
	const scroller = (0, import_react.useRef)(null);
	const products = useApp((s) => s.products);
	const visible = clips.filter((c) => {
		if (hidden.includes(c.id)) return false;
		if (feedMode === "discover") return true;
		if (!user?.personalizeAds) return true;
		const product = productById(c.productId, products);
		if (user.interests.length && !user.interests.includes(product.category)) {
			if (user.approximateLocation && product.city === user.city) return true;
			return false;
		}
		return true;
	});
	const list = visible.length ? visible : clips.filter((c) => !hidden.includes(c.id));
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		const idx = list.findIndex((c) => c.id === activeClipId);
		if (idx > 0) el.children[idx]?.scrollIntoView({ block: "start" });
	}, [list, activeClipId]);
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		const nodes = [...el.querySelectorAll("[data-clip]")];
		const io = new IntersectionObserver((entries) => {
			const id = (entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target)?.dataset.clip;
			if (id) setActiveClip(id);
		}, {
			root: el,
			threshold: .65
		});
		nodes.forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, [list, setActiveClip]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full bg-black",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scroller,
				className: "feed-snap scrollbar-none h-full overflow-y-auto",
				children: list.map((clip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipSlide, {
					clip,
					active: clip.id === activeClipId
				}, clip.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 top-[calc(10px+env(safe-area-inset-top))] z-10 flex items-start justify-between px-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: 34 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: toggleSound,
						className: "grid size-10 place-items-center rounded-full border border-line bg-bg-elevated/80 text-fg backdrop-blur-md",
						"aria-label": soundOn ? "Silenciar" : "Activar sonido",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSound, {
							muted: !soundOn,
							size: 18
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setTab("create"),
						className: "rounded-full bg-gradient-to-br from-cyan to-mint px-3 py-2 text-[11px] font-extrabold text-bg",
						children: "+ Subir Clip"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-1/2 top-[calc(54px+env(safe-area-inset-top))] z-10 flex -translate-x-1/2 gap-1 rounded-full bg-black/35 p-1 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeChip, {
					on: feedMode === "for-you",
					onClick: () => setFeedMode("for-you"),
					children: "Para ti"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModeChip, {
					on: feedMode === "discover",
					onClick: () => setFeedMode("discover"),
					children: "Descubrir"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipSheets, {})
		]
	});
}
function ModeChip({ on, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-full px-3 py-1 text-[11px] font-bold", on ? "bg-fg text-bg" : "text-fg/80"),
		children
	});
}
function ClipSlide({ clip, active }) {
	const videoRef = (0, import_react.useRef)(null);
	const soundOn = useApp((s) => s.soundOn);
	const [paused, setPaused] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const v = videoRef.current;
		if (!v) return;
		v.muted = !soundOn;
		if (active && !paused) v.play().catch(() => void 0);
		else v.pause();
	}, [
		active,
		soundOn,
		paused,
		clip.videoUrl
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		"data-clip": clip.id,
		className: "relative h-full min-h-full w-full",
		children: [
			clip.videoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: clip.videoUrl,
				poster: clip.posterUrl,
				loop: true,
				playsInline: true,
				muted: !soundOn,
				className: "absolute inset-0 h-full w-full object-cover",
				onClick: () => setPaused((p) => !p)
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: clip.posterUrl,
				alt: "",
				className: cn("absolute inset-0 h-full w-full object-cover", active && "kenburns"),
				onClick: () => setPaused((p) => !p)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(#000b,transparent_18%,transparent_58%,#000a_100%)]" }),
			paused ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "absolute left-1/2 top-1/2 z-10 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-fg",
				onClick: () => setPaused(false),
				"aria-label": "Reproducir",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPlay, { size: 28 })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipOverlay, { clip })
		]
	});
}
function ClipOverlay({ clip }) {
	const author = useAuthor(clip.authorId);
	const product = useProduct(clip.productId);
	const following = useApp((s) => s.following);
	const toggleFollow = useApp((s) => s.toggleFollow);
	const liked = useApp((s) => s.liked);
	const saved = useApp((s) => s.saved);
	const toggleLike = useApp((s) => s.toggleLike);
	const toggleSave = useApp((s) => s.toggleSave);
	const openSheet = useApp((s) => s.openSheet);
	const shareClip = useApp((s) => s.shareClip);
	const tried = useApp((s) => s.tried[clip.id]);
	const would = useApp((s) => s.would[clip.id]);
	const stats = clipStats(clip);
	const isLiked = liked.includes(clip.id);
	const isSaved = saved.includes(clip.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute left-3 top-[calc(96px+env(safe-area-inset-top))] z-10 flex w-max max-w-[230px] flex-col items-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-full border border-line bg-bg-elevated/80 py-1 pr-2 pl-1 backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: author.avatarUrl,
							alt: "",
							className: "size-9 rounded-full border-2 border-cyan object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-w-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "truncate text-xs font-extrabold",
								children: ["@", author.username]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => toggleFollow(author.id),
							className: cn("rounded-[10px] px-2 py-1 text-[10px] font-extrabold", following.includes(author.id) ? "bg-fg/15 text-fg" : "bg-gradient-to-br from-cyan to-mint text-bg"),
							children: following.includes(author.id) ? "Siguiendo" : "Seguir"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-[11px] font-semibold text-fg/90",
					children: [
						author.displayName,
						" · ",
						DISCLOSURE_LABEL[clip.disclosure],
						clip.daysUsed ? ` · ${clip.daysUsed} días de uso` : ""
					]
				}),
				tried ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openSheet("would", clip.id),
					className: "mt-2 flex w-max max-w-[210px] items-center gap-1.5 rounded-2xl border border-mint/40 bg-[#0b1c16]/90 px-2.5 py-1.5 text-[11px] font-extrabold backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "grid size-[18px] place-items-center rounded-full bg-mint text-[9px] text-bg",
							children: "2"
						}),
						"¿Lo comprarías?",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconTarget, { size: 14 })
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => openSheet("tried", clip.id),
					className: "mt-2 flex w-max max-w-[210px] items-center gap-1.5 rounded-2xl border border-cyan/40 bg-[#0c1822]/90 px-2.5 py-1.5 text-[11px] font-extrabold backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "grid size-[18px] place-items-center rounded-full bg-cyan text-[9px] text-bg",
							children: "1"
						}),
						"¿Lo has probado?",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconFlask, { size: 14 })
					]
				}),
				would ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1.5 text-[10px] font-semibold text-mint",
					children: ["Tu voto: ", would === "yes" ? "lo compraría" : "no me encaja"]
				}) : null
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-1.5 bottom-[148px] z-10 flex flex-col items-center gap-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
					name: "Me gusta",
					label: formatCount(clip.likes),
					active: isLiked,
					onClick: () => toggleLike(clip.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandActionIcon, {
						kind: "like",
						active: isLiked,
						label: "Me gusta"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
					name: "Comentarios",
					label: formatCount(clip.comments),
					onClick: () => openSheet("comments", clip.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandActionIcon, {
						kind: "comment",
						label: "Comentarios"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
					name: "Guardar",
					label: formatCount(clip.saves),
					active: isSaved,
					onClick: () => toggleSave(clip.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandActionIcon, {
						kind: "save",
						active: isSaved,
						label: "Guardar"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
					name: "Compartir",
					label: formatCount(clip.shares),
					onClick: () => void shareClip(clip.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandActionIcon, {
						kind: "share",
						label: "Compartir"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
					name: "Más opciones",
					label: "",
					onClick: () => openSheet("more", clip.id),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandActionIcon, {
						kind: "more",
						size: 42,
						label: "Más"
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-x-3 bottom-[62px] z-10 rounded-[16px] border border-line bg-[#121218]/78 px-2.5 py-2 backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "min-w-0 flex-1 text-left",
					onClick: () => openSheet("product", clip.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate font-display text-[13px] font-extrabold leading-tight",
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "truncate text-[10px] text-muted",
						children: [
							product.brand,
							" · ",
							formatPrice(product.price, product.currency),
							product.city ? ` · ${product.city}` : ""
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex shrink-0 gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricChip, {
						value: `${stats.fulfills}%`,
						label: "Cumple",
						accent: "mint"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetricChip, {
						value: `${stats.wouldBuy}%`,
						label: "Compraría",
						accent: "pink"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => openSheet("cta", clip.id),
				className: "mt-1.5 flex w-full items-center justify-center gap-1.5 rounded-[10px] bg-gradient-to-br from-mint to-cyan py-2 text-[12px] font-extrabold text-bg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaIcon, { kind: product.cta }), product.ctaLabel]
			})]
		})
	] });
}
function CtaIcon({ kind }) {
	if (kind === "directions") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPin, { size: 14 });
	if (kind === "call") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPhone, { size: 14 });
	if (kind === "book") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPhone, { size: 14 });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCart, { size: 14 });
}
function Action({ name, label, children, onClick, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		"aria-label": name,
		"aria-pressed": active,
		className: "flex flex-col items-center gap-px text-[10px] font-extrabold text-fg",
		children: [children, label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums drop-shadow-[0_1px_3px_#000]",
			children: label
		}) : null]
	});
}
function MetricChip({ value, label, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-[48px] rounded-[10px] bg-black/55 px-1.5 py-1 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
			className: cn("block text-[12px] leading-none tabular-nums", accent === "mint" ? "text-mint" : "text-pink"),
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
			className: "text-[8px] font-bold uppercase tracking-wide text-subtle",
			children: label
		})]
	});
}
function ClipSheets() {
	const sheet = useApp((s) => s.sheet);
	const clipId = useApp((s) => s.sheetClipId);
	const clips = useApp((s) => s.clips);
	const closeSheet = useApp((s) => s.closeSheet);
	const clip = clips.find((c) => c.id === clipId) ?? clips[0];
	const product = useProduct(clip?.productId ?? "headphones");
	const author = useAuthor(clip?.authorId ?? "ana");
	if (!clip) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: sheet === "tried",
			title: "¿Lo has probado?",
			onClose: closeSheet,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriedSheet, { clipId: clip.id })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: sheet === "would",
			title: "¿Lo comprarías?",
			onClose: closeSheet,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WouldSheet, { clipId: clip.id })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: sheet === "comments",
			title: "Comentarios",
			onClose: closeSheet,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentsSheet, { clipId: clip.id })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: sheet === "cta",
			title: product.ctaLabel,
			onClose: closeSheet,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaSheet, { clip })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: sheet === "more",
			title: "Opciones del clip",
			onClose: closeSheet,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoreSheet, { clip })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: sheet === "why",
			title: "¿Por qué ves este clip?",
			onClose: closeSheet,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhySheet, { clip })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
			open: sheet === "product",
			title: "Ficha social",
			onClose: closeSheet,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductSheet, {
				clip,
				disclosure: clip.disclosure,
				author: author.displayName
			})
		})
	] });
}
function TriedSheet({ clipId }) {
	const setTried = useApp((s) => s.setTried);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "primary",
			onClick: () => setTried(clipId, "verified"),
			children: "Sí, tester verificado"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			onClick: () => setTried(clipId, "casual"),
			children: "Sí, uso casual"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			onClick: () => setTried(clipId, "no"),
			children: "No lo he probado"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "ghost",
			onClick: () => useApp.getState().closeSheet(),
			children: "Cancelar"
		})
	] });
}
function WouldSheet({ clipId }) {
	const tried = useApp((s) => s.tried[clipId]);
	const voteWould = useApp((s) => s.voteWould);
	const voteFulfills = useApp((s) => s.voteFulfills);
	if (tried === "verified" || tried === "casual") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-xs text-muted",
			children: "Si lo has usado, dinos si cumple lo que promete. Los testers verificados pesan más."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "primary",
			onClick: () => voteFulfills(clipId, "yes"),
			children: "Cumple lo prometido"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			onClick: () => voteFulfills(clipId, "mid"),
			children: "A medias"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			onClick: () => voteFulfills(clipId, "no"),
			children: "No cumple"
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
		variant: "primary",
		onClick: () => voteWould(clipId, "yes"),
		children: "Sí, me interesa"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
		onClick: () => voteWould(clipId, "no"),
		children: "No me encaja"
	})] });
}
function CommentsSheet({ clipId }) {
	const comments = useApp((s) => s.comments).filter((c) => c.clipId === clipId);
	const addComment = useApp((s) => s.addComment);
	const [text, setText] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "mb-3 flex gap-2",
		onSubmit: (e) => {
			e.preventDefault();
			if (!text.trim()) return;
			addComment(clipId, text.trim());
			setText("");
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value: text,
			onChange: (e) => setText(e.target.value),
			maxLength: 160,
			placeholder: "Escribe un comentario...",
			className: "flex-1 rounded-[14px] border border-line bg-bg-elevated px-3 py-3 text-sm outline-none focus:border-cyan"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "submit",
			className: "rounded-[13px] bg-cyan px-3.5 text-sm font-extrabold text-bg",
			children: "Enviar"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-2",
		children: comments.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-line bg-bg-elevated p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
				className: "text-xs",
				children: ["@", c.username]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-muted",
				children: c.text
			})]
		}, c.id))
	})] });
}
function CtaSheet({ clip }) {
	const product = useProduct(clip.productId);
	const toastMsg = useApp((s) => s.toastMsg);
	const closeSheet = useApp((s) => s.closeSheet);
	if (product.cta === "buy") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-3 text-center text-xs text-muted",
			children: [
				"Demo de compra. Código ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
					className: "text-fg",
					children: "CLIPS10"
				}),
				" — 10% dto."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "mint",
			onClick: () => {
				toastMsg("Demo: redirección a tienda simulada");
				closeSheet();
			},
			children: "Ir a la tienda"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "ghost",
			onClick: closeSheet,
			children: "Seguir viendo"
		})
	] });
	if (product.cta === "book") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mb-3 text-xs text-muted",
			children: [product.address, ". Reserva simulada para hoy."]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "primary",
			onClick: () => {
				toastMsg("Reserva enviada (demo)");
				closeSheet();
			},
			children: "Confirmar reserva"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "ghost",
			onClick: closeSheet,
			children: "Cancelar"
		})
	] });
	if (product.cta === "call") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(OptionButton, {
		variant: "primary",
		onClick: () => {
			toastMsg(`Llamada simulada a ${product.phone}`);
			closeSheet();
		},
		children: ["Llamar ", product.phone]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
		variant: "ghost",
		onClick: closeSheet,
		children: "Cancelar"
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 text-xs text-muted",
			children: product.address
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "primary",
			onClick: () => {
				toastMsg("Abrir mapas (demo)");
				closeSheet();
			},
			children: "Cómo llegar"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "ghost",
			onClick: closeSheet,
			children: "Cerrar"
		})
	] });
}
function MoreSheet({ clip }) {
	const hideClip = useApp((s) => s.hideClip);
	const toastMsg = useApp((s) => s.toastMsg);
	const closeSheet = useApp((s) => s.closeSheet);
	const openSheet = useApp((s) => s.openSheet);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			onClick: () => openSheet("why", clip.id),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconInfo, { size: 16 }), " Por qué veo este clip"]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			onClick: () => {
				toastMsg("Marcado como interesante");
				closeSheet();
			},
			children: "Marcar como interesante"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			onClick: () => hideClip(clip.id),
			children: "No me interesa"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			onClick: () => {
				toastMsg("Reporte enviado");
				closeSheet();
			},
			children: "Reportar"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
			variant: "ghost",
			onClick: closeSheet,
			children: "Cancelar"
		})
	] });
}
function WhySheet({ clip }) {
	const user = useApp((s) => s.user);
	const product = useProduct(clip.productId);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
		className: "space-y-2 text-sm text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-line bg-bg-elevated p-3",
				children: [
					"Categoría: ",
					product.category,
					" · ",
					DISCLOSURE_LABEL[clip.disclosure]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-xl border border-line bg-bg-elevated p-3",
				children: user?.personalizeAds ? "Personalización activada según tus intereses." : "Ves el feed abierto porque desactivaste la personalización."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl border border-line bg-bg-elevated p-3",
				children: [
					"Ubicación aproximada: ",
					user?.city ?? "Parla",
					". Distancia estimada ",
					product.distanceKm,
					" km."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "rounded-xl border border-line bg-bg-elevated p-3",
				children: DISCLOSURE_HINT[clip.disclosure]
			})
		]
	});
}
function ProductSheet({ clip, disclosure, author }) {
	const product = useProduct(clip.productId);
	const stats = clipStats(clip);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.imageUrl,
				alt: "",
				className: "h-36 w-full rounded-2xl object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg font-bold",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						product.brand,
						" · ",
						formatPrice(product.price, product.currency)
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs font-semibold text-cyan",
					children: [
						author,
						" · ",
						DISCLOSURE_LABEL[disclosure]
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: product.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						stat: `${stats.fulfills}%`,
						label: "Cumple"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						stat: `${stats.wouldBuy}%`,
						label: "Compraría"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						stat: `${product.verifiedOpinions}`,
						label: "Verificadas"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-xs font-bold uppercase tracking-wide text-subtle",
				children: "Ventajas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1 text-sm",
				children: product.pros.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", p] }, p))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-xs font-bold uppercase tracking-wide text-subtle",
				children: "Problemas repetidos"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1 text-sm text-muted",
				children: product.cons.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", p] }, p))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-1 text-xs font-bold uppercase tracking-wide text-subtle",
				children: "Dónde"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1 text-sm",
				children: product.where.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: w }, w))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => useApp.getState().openSheet("cta", clip.id),
				className: "w-full rounded-[13px] bg-gradient-to-br from-mint to-cyan py-3 text-sm font-extrabold text-bg",
				children: product.ctaLabel
			})
		]
	});
}
function Mini({ stat, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-bg-elevated p-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
			className: "block text-sm tabular-nums text-mint",
			children: stat
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] text-muted",
			children: label
		})]
	});
}
var AGES = [
	"18-24",
	"25-34",
	"35-44",
	"45-54",
	"55+"
];
var GENDERS = [
	{
		id: "woman",
		label: "Mujer"
	},
	{
		id: "man",
		label: "Hombre"
	},
	{
		id: "nonbinary",
		label: "No binario"
	},
	{
		id: "prefer_not",
		label: "Prefiero no decirlo"
	}
];
var CITIES = [
	"Parla",
	"Madrid",
	"Leganés",
	"Getafe",
	"Fuenlabrada"
];
var ROLES = [
	{
		id: "user",
		label: "Usuario",
		hint: "Descubrir y opinar"
	},
	{
		id: "creator",
		label: "Creador",
		hint: "Publicar reseñas"
	},
	{
		id: "business",
		label: "Empresa",
		hint: "Llegar a tu barrio"
	}
];
function Onboarding() {
	const login = useApp((s) => s.login);
	const [mode, setMode] = (0, import_react.useState)("login");
	const [step, setStep] = (0, import_react.useState)("auth");
	const [email, setEmail] = (0, import_react.useState)("");
	const [username, setUsername] = (0, import_react.useState)("");
	const [role, setRole] = (0, import_react.useState)("user");
	const [ageRange, setAgeRange] = (0, import_react.useState)("25-34");
	const [gender, setGender] = (0, import_react.useState)("prefer_not");
	const [city, setCity] = (0, import_react.useState)("Parla");
	const [interests, setInterests] = (0, import_react.useState)(["tech", "restaurants"]);
	const [personalizeAds, setPersonalizeAds] = (0, import_react.useState)(true);
	const [approximateLocation, setApproximateLocation] = (0, import_react.useState)(true);
	function enterDemo() {
		login({ ...DEMO_USER });
	}
	function submitAuth(e) {
		e.preventDefault();
		if (mode === "login") {
			const name = email.split("@")[0] || "usuario";
			login({
				...DEMO_USER,
				username: name.replace(/\s/g, "").toLowerCase(),
				displayName: name,
				email: email || DEMO_USER.email
			});
			return;
		}
		setStep("prefs");
	}
	function finish() {
		const name = username.replace(/^@/, "") || email.split("@")[0] || "usuario";
		const user = {
			id: "me",
			username: name.toLowerCase(),
			displayName: name,
			email: email || `${name}@clips.app`,
			avatarUrl: "/avatars/user.jpg",
			role,
			ageRange,
			gender,
			city,
			interests,
			personalizeAds,
			approximateLocation
		};
		login(user);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full flex-col justify-between bg-[radial-gradient(circle_at_50%_0,#15223a,var(--color-bg)_62%)] px-5 pb-[calc(24px+env(safe-area-inset-bottom))] pt-[calc(28px+env(safe-area-inset-top))]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-7 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-3.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, { size: 72 })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-[34px]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-[13px] text-muted",
					children: "Descubre, opina y compra mejor."
				})
			]
		}), step === "auth" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex gap-1 rounded-[15px] bg-fg/5 p-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("flex-1 rounded-xl py-2.5 text-sm font-bold", mode === "login" ? "bg-fg/10 text-fg" : "text-muted"),
					onClick: () => setMode("login"),
					children: "Iniciar sesión"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cn("flex-1 rounded-xl py-2.5 text-sm font-bold", mode === "register" ? "bg-fg/10 text-fg" : "text-muted"),
					onClick: () => setMode("register"),
					children: "Registrarse"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-3.5",
				onSubmit: submitAuth,
				children: [
					mode === "register" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-muted",
							children: "Usuario"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: "w-full rounded-[14px] border border-line bg-bg-elevated px-3.5 py-3.5 text-sm outline-none focus:border-cyan",
							placeholder: "@tu_usuario",
							value: username,
							onChange: (e) => setUsername(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-muted",
							children: "Correo electrónico"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							required: true,
							className: "w-full rounded-[14px] border border-line bg-bg-elevated px-3.5 py-3.5 text-sm outline-none focus:border-cyan",
							placeholder: "correo@ejemplo.com",
							value: email,
							onChange: (e) => setEmail(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-bold text-muted",
							children: "Contraseña"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							minLength: 4,
							className: "w-full rounded-[14px] border border-line bg-bg-elevated px-3.5 py-3.5 text-sm outline-none focus:border-cyan",
							placeholder: "••••••••",
							defaultValue: "demo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-1 rounded-[15px] bg-gradient-to-br from-cyan to-mint py-3.5 text-sm font-extrabold text-bg",
						children: mode === "register" ? "Continuar" : "Entrar a ClipsApp"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-4 flex items-center gap-2.5 text-xs text-subtle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" }),
					"o",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-line" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: enterDemo,
				className: "w-full rounded-[14px] border border-line bg-fg/5 py-3 text-sm font-bold",
				children: "Entrar a la demo"
			})
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Elige cómo usar ClipsApp"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2",
					children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setRole(r.id),
						className: cn("rounded-xl border px-2 py-2.5 text-left", role === r.id ? "border-cyan bg-cyan/10" : "border-line bg-bg-elevated"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-extrabold",
							children: r.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] text-muted",
							children: r.hint
						})]
					}, r.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex flex-col gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-bold text-muted",
						children: "Ciudad"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "w-full rounded-[14px] border border-line bg-bg-elevated px-3.5 py-3 text-sm",
						value: city,
						onChange: (e) => setCity(e.target.value),
						children: CITIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-bold text-muted",
					children: "Edad"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: AGES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip$1, {
						on: ageRange === a,
						onClick: () => setAgeRange(a),
						children: a
					}, a))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-bold text-muted",
					children: "Género (opcional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: GENDERS.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip$1, {
						on: gender === g.id,
						onClick: () => setGender(g.id),
						children: g.label
					}, g.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-2 text-xs font-bold text-muted",
					children: "Categorías de interés"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: CATEGORIES.map((c) => {
						const on = interests.includes(c.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip$1, {
							on,
							onClick: () => setInterests((prev) => on ? prev.filter((id) => id !== c.id) : [...prev, c.id]),
							children: c.name
						}, c.id);
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					label: "Personalización publicitaria",
					hint: "Consentimiento aparte. Puedes apagarlo cuando quieras.",
					value: personalizeAds,
					onChange: setPersonalizeAds
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
					label: "Ubicación aproximada",
					hint: "Ciudad o código postal. Nunca GPS exacto por defecto.",
					value: approximateLocation,
					onChange: setApproximateLocation
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: finish,
					className: "rounded-[15px] bg-gradient-to-br from-cyan to-mint py-3.5 text-sm font-extrabold text-bg",
					children: "Empezar a descubrir"
				})
			]
		})] })
	});
}
function Chip$1({ on, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("rounded-full px-3 py-1.5 text-xs font-bold", on ? "bg-cyan text-bg" : "bg-fg/8 text-muted"),
		children
	});
}
function Toggle({ label, hint, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onChange(!value),
		className: "flex w-full items-start gap-3 rounded-xl border border-line bg-bg-elevated p-3 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("mt-0.5 grid size-5 place-items-center rounded-md border", value ? "border-mint bg-mint text-bg" : "border-line"),
			children: value ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCheck, { size: 12 }) : null
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm font-semibold",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-[11px] text-muted",
			children: hint
		})] })]
	});
}
function Explore() {
	const clips = useApp((s) => s.clips);
	const products = useApp((s) => s.products);
	const hidden = useApp((s) => s.hidden);
	const user = useApp((s) => s.user);
	const setTab = useApp((s) => s.setTab);
	const setActiveClip = useApp((s) => s.setActiveClip);
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const list = clips.filter((c) => {
		if (hidden.includes(c.id)) return false;
		const p = productById(c.productId, products);
		const a = creatorById(c.authorId);
		if (cat !== "all" && p.category !== cat) return false;
		if (!q.trim()) return true;
		return `${p.name} ${p.brand} ${a.username} ${c.caption} ${p.city}`.toLowerCase().includes(q.toLowerCase());
	});
	const nearby = products.filter((p) => p.city === (user?.city ?? "Parla")).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "px-4 pt-[calc(18px+env(safe-area-inset-top))]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold",
						children: "Explorar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted",
						children: [
							"Cerca de ",
							user?.city ?? "Parla",
							" y por categoría."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mt-3 flex items-center gap-2 rounded-[14px] border border-line bg-bg-elevated px-3 py-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconSearch, {
							size: 18,
							className: "text-muted"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Productos, negocios, creadores",
							className: "w-full bg-transparent text-sm outline-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "scrollbar-none mt-3 flex gap-1.5 overflow-x-auto pb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: cat === "all",
							onClick: () => setCat("all"),
							children: "Todas"
						}), CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: cat === c.id,
							onClick: () => setCat(c.id),
							children: c.name
						}, c.id))]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scrollbar-none flex-1 overflow-y-auto px-4 pb-24 pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 text-sm font-bold",
						children: "Cerca de ti"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5 grid gap-2",
						children: nearby.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex gap-3 rounded-2xl border border-line bg-surface p-2 text-left",
							onClick: () => {
								const clip = clips.find((c) => c.productId === p.id);
								if (clip) {
									setActiveClip(clip.id);
									setTab("home");
								}
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.imageUrl,
								alt: "",
								className: "size-16 rounded-xl object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "truncate text-sm font-bold",
										children: p.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-xs text-muted",
										children: [
											p.brand,
											" · ",
											p.distanceKm,
											" km"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-1 text-[11px] font-semibold text-mint",
										children: [
											p.ctaLabel,
											" · ",
											formatPrice(p.price, p.currency)
										]
									})
								]
							})]
						}, p.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 text-sm font-bold",
						children: "Tendencias"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: list.map((clip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipTile, {
							clip,
							onOpen: () => {
								setActiveClip(clip.id);
								setTab("home");
							}
						}, clip.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mb-2 mt-5 text-sm font-bold",
						children: "Creadores"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scrollbar-none flex gap-3 overflow-x-auto pb-2",
						children: CREATORS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "w-28 shrink-0 rounded-2xl border border-line bg-surface p-2 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.avatarUrl,
									alt: "",
									className: "mx-auto size-12 rounded-full object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 truncate text-xs font-bold",
									children: ["@", c.username]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-muted",
									children: formatCount(c.followers)
								})
							]
						}, c.id))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
function Chip({ on, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("shrink-0 rounded-full px-3 py-1.5 text-xs font-bold", on ? "bg-cyan text-bg" : "bg-fg/8 text-muted"),
		children
	});
}
function ClipTile({ clip, onOpen }) {
	const products = useApp((s) => s.products);
	const p = productById(clip.productId, products);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onOpen,
		className: "overflow-hidden rounded-2xl border border-line text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: clip.posterUrl,
				alt: "",
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-2 left-2 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-bold",
				children: DISCLOSURE_LABEL[clip.disclosure]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-surface p-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "line-clamp-2 text-xs font-bold",
				children: p.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-[10px] text-muted",
				children: [formatCount(clip.likes), " me gusta"]
			})]
		})]
	});
}
function CreateClip() {
	const user = useApp((s) => s.user);
	const publishClip = useApp((s) => s.publishClip);
	const [fileUrl, setFileUrl] = (0, import_react.useState)();
	const [name, setName] = (0, import_react.useState)("");
	const [brand, setBrand] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)("19.90");
	const [caption, setCaption] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("tech");
	const [disclosure, setDisclosure] = (0, import_react.useState)("organic");
	const [cta, setCta] = (0, import_react.useState)("buy");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "px-4 pt-[calc(18px+env(safe-area-inset-top))]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-2xl font-bold",
					children: "Publicar clip"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted",
					children: "Etiqueta el producto y declara si hay colaboración."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "scrollbar-none flex-1 overflow-y-auto px-4 pb-24 pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mb-3 flex h-44 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-dashed border-cyan/40 bg-surface",
						children: [fileUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
							src: fileUrl,
							className: "h-full w-full object-cover",
							muted: true,
							playsInline: true
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold text-muted",
							children: "Selecciona un vídeo"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "file",
							accept: "video/*",
							className: "hidden",
							onChange: (e) => {
								const f = e.target.files?.[0];
								if (!f) return;
								setFileUrl(URL.createObjectURL(f));
							}
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Producto",
						value: name,
						onChange: setName,
						placeholder: "Nombre del producto"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Marca o comercio",
						value: brand,
						onChange: setBrand,
						placeholder: "SoundTech"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Precio",
						value: price,
						onChange: setPrice,
						placeholder: "19.90"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Descripción del clip",
						value: caption,
						onChange: setCaption,
						placeholder: "Qué has comprobado"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "mb-3 block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1 block text-xs font-bold text-muted",
							children: "Categoría"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							className: "w-full rounded-[14px] border border-line bg-bg-elevated px-3 py-3 text-sm",
							value: category,
							onChange: (e) => setCategory(e.target.value),
							children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c.id,
								children: c.name
							}, c.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs font-bold text-muted",
						children: "Transparencia"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-3 flex flex-wrap gap-1.5",
						children: [
							["organic", "Orgánica"],
							["verified_purchase", "Compra verificada"],
							["sponsored", "Patrocinado"],
							["affiliate", "Afiliado"],
							["gifted", "Recibido"],
							["local", "Negocio local"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: disclosure === id,
							onClick: () => setDisclosure(id),
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-xs font-bold text-muted",
						children: "Acción"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex flex-wrap gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: cta === "buy",
								onClick: () => setCta("buy"),
								children: "Comprar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: cta === "book",
								onClick: () => setCta("book"),
								children: "Reservar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on: cta === "directions",
								onClick: () => setCta("directions"),
								children: "Cómo llegar"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: !name.trim(),
						onClick: () => {
							const id = `mine-${Date.now()}`;
							const parsed = Number.parseFloat(price.replace(",", ".")) || 0;
							publishClip({
								id,
								videoUrl: fileUrl,
								posterUrl: fileUrl ? "" : "/images/headphones.jpg",
								caption: caption || name,
								authorId: "me-local",
								productId: id,
								disclosure,
								likes: 0,
								comments: 0,
								saves: 0,
								shares: 0,
								fulfillsYes: 1,
								fulfillsMid: 0,
								fulfillsNo: 0,
								wouldYes: 1,
								wouldNo: 0,
								local: cta !== "buy",
								sponsored: disclosure === "sponsored",
								createdAt: Date.now()
							}, {
								id,
								name: name.trim(),
								brand: brand.trim() || "Mi marca",
								description: caption || name,
								price: parsed,
								currency: "EUR",
								category,
								city: user?.city ?? "Parla",
								distanceKm: .4,
								imageUrl: "/images/headphones.jpg",
								cta,
								ctaLabel: cta === "buy" ? "Comprar ahora" : cta === "book" ? "Reservar ahora" : "Cómo llegar",
								fulfills: 100,
								wouldBuy: 100,
								verifiedOpinions: 1,
								rating: 5,
								pros: ["Publicado en la demo"],
								cons: [],
								faq: [],
								alternatives: [],
								where: [brand.trim() || "Local"]
							});
						},
						className: "w-full rounded-[15px] bg-gradient-to-br from-cyan to-mint py-3.5 text-sm font-extrabold text-bg disabled:opacity-40",
						children: "Publicar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-[11px] text-subtle",
						children: "El vídeo se queda en este dispositivo (demo local)."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
function Field({ label, value, onChange, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mb-3 block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1 block text-xs font-bold text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value,
			onChange: (e) => onChange(e.target.value),
			placeholder,
			className: "w-full rounded-[14px] border border-line bg-bg-elevated px-3 py-3 text-sm outline-none focus:border-cyan"
		})]
	});
}
function Library() {
	const clips = useApp((s) => s.clips);
	const products = useApp((s) => s.products);
	const saved = useApp((s) => s.saved);
	const setTab = useApp((s) => s.setTab);
	const setActiveClip = useApp((s) => s.setActiveClip);
	const [mode, setMode] = (0, import_react.useState)("published");
	const mine = clips.filter((c) => c.id.startsWith("mine-") || c.authorId === "me-local");
	const savedClips = clips.filter((c) => saved.includes(c.id));
	const list = mode === "saved" ? savedClips : mine;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "px-4 pt-[calc(18px+env(safe-area-inset-top))]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-2xl font-bold",
						children: "Mis clips"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted",
						children: "Publicados en esta demo y guardados."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-1 rounded-[14px] bg-fg/5 p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: mode === "published",
							onClick: () => setMode("published"),
							children: "Publicados"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: mode === "saved",
							onClick: () => setMode("saved"),
							children: "Guardados"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scrollbar-none flex-1 overflow-y-auto px-4 pb-24 pt-4",
				children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "py-10 text-center text-sm text-muted",
					children: "Todavía no hay clips en esta lista."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-2",
					children: list.map((c) => {
						const p = productById(c.productId, products);
						const stats = clipStats(c);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex w-full gap-3 rounded-2xl border border-line bg-surface p-2 text-left",
							onClick: () => {
								setActiveClip(c.id);
								setTab("home");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.posterUrl || p.imageUrl,
								alt: "",
								className: "h-16 w-20 rounded-xl object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "truncate text-sm font-bold",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[11px] text-muted",
									children: [
										formatCount(c.likes),
										" me gusta · ",
										stats.wouldBuy,
										"% lo compraría"
									]
								})]
							})]
						}, c.id);
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
function Profile() {
	const user = useApp((s) => s.user);
	const updateUser = useApp((s) => s.updateUser);
	const logout = useApp((s) => s.logout);
	const liked = useApp((s) => s.liked);
	const saved = useApp((s) => s.saved);
	const following = useApp((s) => s.following);
	const [panel, setPanel] = (0, import_react.useState)("profile");
	if (!user) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "px-4 pt-[calc(18px+env(safe-area-inset-top))]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: user.avatarUrl,
							alt: "",
							className: "size-16 rounded-full border-2 border-cyan object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-xl font-bold",
							children: ["@", user.username]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted",
							children: [
								user.city,
								" · ",
								user.ageRange,
								" · ",
								user.role
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 grid grid-cols-3 gap-2 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: liked.length,
								label: "Me gusta"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: saved.length,
								label: "Guardados"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								n: following.length,
								label: "Siguiendo"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-1 rounded-[14px] bg-fg/5 p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: panel === "profile",
							onClick: () => setPanel("profile"),
							children: "Perfil"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
							on: panel === "business",
							onClick: () => setPanel("business"),
							children: "Empresa"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "scrollbar-none flex-1 overflow-y-auto px-4 pb-24 pt-4",
				children: panel === "profile" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-2 text-xs font-bold text-muted",
						children: "Intereses"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 flex flex-wrap gap-1.5",
						children: CATEGORIES.map((c) => {
							const on = user.interests.includes(c.id);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
								on,
								onClick: () => updateUser({ interests: on ? user.interests.filter((id) => id !== c.id) : [...user.interests, c.id] }),
								children: c.name
							}, c.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconShield, { size: 18 }),
						title: "Personalización publicitaria",
						on: user.personalizeAds,
						onToggle: () => updateUser({ personalizeAds: !user.personalizeAds })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrivacyRow, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconPin, { size: 18 }),
						title: "Ubicación aproximada",
						on: user.approximateLocation,
						onToggle: () => updateUser({ approximateLocation: !user.approximateLocation })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: logout,
						className: "mt-4 flex w-full items-center justify-center gap-2 rounded-[14px] border border-line bg-surface py-3 text-sm font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLogout, { size: 16 }), " Cerrar sesión"]
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BusinessPanel, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
		]
	});
}
function Stat({ n, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
			className: "block tabular-nums",
			children: n
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] text-muted",
			children: label
		})]
	});
}
function PrivacyRow({ icon, title, on, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		className: "mb-2 flex w-full items-center gap-3 rounded-2xl border border-line bg-surface px-3 py-3 text-left",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-cyan",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex-1 text-sm font-semibold",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("text-xs font-extrabold", on ? "text-mint" : "text-muted"),
				children: on ? "On" : "Off"
			})
		]
	});
}
function BusinessPanel() {
	const metrics = (0, import_react.useMemo)(() => [
		{
			k: "Reproducciones",
			v: "18.4K"
		},
		{
			k: "Guardados",
			v: "1.2K"
		},
		{
			k: "Clics a ficha",
			v: "640"
		},
		{
			k: "Reservas / compras",
			v: "92"
		}
	], []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-2 text-sm font-bold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconChart, {
				size: 16,
				className: "text-cyan"
			}), " Panel de comercio"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-4 grid grid-cols-2 gap-2",
			children: metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-line bg-surface p-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] text-muted",
					children: m.k
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-xl font-bold tabular-nums text-mint",
					children: m.v
				})]
			}, m.k))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-2 text-xs font-bold text-muted",
			children: "Campañas locales"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Campaign, {
				name: "Café Nexo · Parla 2 km",
				status: "Activa"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Campaign, {
				name: "Barbería Sur · fade 18€",
				status: "Pausada"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-xs text-muted",
			children: "Las empresas no pueden borrar críticas legítimas. Solo responder."
		}),
		REVIEWS.slice(0, 2).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 rounded-2xl border border-line bg-surface p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 text-mint",
					children: [Array.from({ length: r.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconStar, {
						size: 12,
						filled: true
					}, i)), r.verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 flex items-center gap-1 text-[10px] font-bold text-cyan",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconCheck, { size: 12 }), " verificada"]
					}) : null]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm",
					children: r.text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OptionButton, {
					variant: "ghost",
					onClick: () => useApp.getState().toastMsg("Respuesta enviada (demo)"),
					children: "Responder"
				})
			]
		}, r.id))
	] });
}
function Campaign({ name, status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between rounded-2xl border border-line bg-surface px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-semibold",
			children: name
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("text-[11px] font-extrabold", status === "Activa" ? "text-mint" : "text-muted"),
			children: status
		})]
	});
}
function ClipsApp() {
	const hydrate = useApp((s) => s.hydrate);
	const user = useApp((s) => s.user);
	const tab = useApp((s) => s.tab);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [!user ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Onboarding, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Main, { tab }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastHost, {})] });
}
function Main({ tab }) {
	if (tab === "explore") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explore, {});
	if (tab === "create") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreateClip, {});
	if (tab === "clips") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Library, {});
	if (tab === "profile") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Profile, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feed, {});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipsApp, {});
}
//#endregion
export { Home as component };
