//#region node_modules/.nitro/vite/services/ssr/assets/booths-CvW83BBK.js
var statusMeta = {
	operational: {
		label: "OPERATIONAL",
		short: "Operational",
		dot: "bg-ok",
		chip: "bg-ok-soft text-ok",
		text: "text-ok",
		ring: "ring-ok/30"
	},
	unavailable: {
		label: "WATER UNAVAILABLE",
		short: "Water unavailable",
		dot: "bg-warn",
		chip: "bg-warn-soft text-warn-foreground",
		text: "text-warn-foreground",
		ring: "ring-warn/30"
	},
	attention: {
		label: "ATTENTION NEEDED",
		short: "Attention needed",
		dot: "bg-warn",
		chip: "bg-warn-soft text-warn-foreground",
		text: "text-warn-foreground",
		ring: "ring-warn/30"
	},
	critical: {
		label: "NOT OPERATIONAL",
		short: "Not operational",
		dot: "bg-crit",
		chip: "bg-crit-soft text-crit",
		text: "text-crit",
		ring: "ring-crit/30"
	}
};
var CAMPUS_CENTER = {
	lat: 25.265,
	lng: 82.99
};
var gridToLatLng = (x, y) => ({
	lat: Number((25.27 - y / 100 * .01).toFixed(6)),
	lng: Number((82.985 + x / 100 * .01).toFixed(6))
});
var mk = (id, location, building, category, status, x, y, extra = {}) => ({
	id,
	location,
	building,
	floor: extra.floor ?? "Ground Floor",
	category,
	status,
	waterAvailable: status === "operational" || status === "attention",
	tds: extra.tds ?? 120 + (x * 7 + y * 3) % 90,
	ph: extra.ph ?? Number((6.8 + (x + y) % 9 / 10).toFixed(1)),
	lastVerified: extra.lastVerified ?? "30 August 2026, 10:32 AM",
	lastMaintenance: extra.lastMaintenance ?? "12 August 2026",
	openComplaints: extra.openComplaints ?? (status === "operational" ? 0 : status === "critical" ? 3 : 1),
	assignedMts: extra.assignedMts ?? "R. Prasad (MTS-14)",
	risk: extra.risk ?? (status === "critical" ? "HIGH" : status === "attention" ? "HIGH" : "LOW"),
	...gridToLatLng(x, y),
	...extra
});
var booths = [
	mk("B-17", "Department of Biochemical Engineering", "School of Biochemical Engineering", "Academic", "critical", 34, 42, {
		tds: 146,
		ph: 7.2,
		floor: "Ground Floor",
		openComplaints: 4,
		lastMaintenance: "02 August 2026",
		risk: "HIGH"
	}),
	mk("B-01", "Department of Ceramic Engineering", "Ceramic Engineering Block", "Academic", "operational", 22, 30),
	mk("B-04", "Department of Chemical Engineering", "Chemical Engineering Block", "Academic", "operational", 28, 55),
	mk("B-08", "Department of Metallurgical Engineering", "Metallurgy Block", "Academic", "attention", 18, 62, { risk: "HIGH" }),
	mk("B-12", "Department of Pharmaceutical Engineering", "Pharma Block", "Academic", "operational", 40, 26),
	mk("D-01", "Department of Civil Engineering", "Civil Engineering Block", "Academic", "operational", 46, 60),
	mk("D-03", "Department of Electrical Engineering", "Electrical Block", "Academic", "unavailable", 52, 48),
	mk("D-05", "Department of Computer Science & Engineering", "CSE Block", "Academic", "operational", 58, 36, { floor: "First Floor" }),
	mk("D-08", "Department of Mechanical Engineering", "Mechanical Block", "Academic", "operational", 62, 58),
	mk("D-11", "Department of Mining Engineering", "Mining Block", "Academic", "attention", 68, 66),
	mk("D-14", "Department of Physics", "Science Block", "Academic", "operational", 44, 18, { floor: "Second Floor" }),
	mk("D-16", "Department of Mathematical Sciences", "Science Block", "Academic", "operational", 50, 14),
	mk("D-19", "Department of Chemistry", "Science Block", "Academic", "critical", 55, 20, {
		risk: "HIGH",
		openComplaints: 2
	}),
	mk("H-01", "Rajputana Bhawan", "Hostel Block A", "Hostel", "operational", 12, 20),
	mk("H-02", "Dhanrajgiri Bhawan", "Hostel Block B", "Hostel", "operational", 10, 34),
	mk("H-04", "Morvi Bhawan", "Hostel Block C", "Hostel", "attention", 14, 48, { risk: "HIGH" }),
	mk("H-06", "Vishwakarma Bhawan", "Hostel Block D", "Hostel", "operational", 8, 58),
	mk("H-08", "Aryabhatta Bhawan", "Hostel Block E", "Hostel", "unavailable", 16, 72),
	mk("H-10", "Limbdi Corner Hostel", "Hostel Block F", "Hostel", "operational", 24, 78),
	mk("H-12", "New Girls Hostel", "Hostel Block G", "Hostel", "operational", 32, 84),
	mk("H-15", "SN Bose Bhawan", "Hostel Block H", "Hostel", "critical", 20, 88, { risk: "HIGH" }),
	mk("L-01", "Central Library — Reading Hall", "Central Library", "Library", "operational", 48, 40, { floor: "First Floor" }),
	mk("L-03", "Central Library — Entrance Lobby", "Central Library", "Library", "critical", 46, 44, { risk: "HIGH" }),
	mk("L-05", "Departmental Library, Mining", "Mining Block", "Library", "operational", 70, 72),
	mk("A-01", "Main Administrative Building", "Administrative Block", "Administrative", "operational", 60, 26),
	mk("A-03", "Academic Section", "Administrative Block", "Administrative", "attention", 64, 30),
	mk("A-05", "Director's Office Wing", "Administrative Block", "Administrative", "operational", 66, 22),
	mk("C-02", "Vishwanath Temple Complex", "Common Area", "Common Area", "operational", 38, 70),
	mk("C-04", "Students' Activity Centre", "Common Area", "Common Area", "operational", 30, 66),
	mk("C-06", "Swatantrata Bhawan", "Common Area", "Common Area", "unavailable", 42, 78),
	mk("C-08", "Sports Complex — Ground Pavilion", "Common Area", "Common Area", "operational", 74, 46),
	mk("C-10", "Health Centre", "Common Area", "Common Area", "operational", 78, 34)
];
/** "b-1", "B01", "b_01" -> "B1" so codes match however they were typed or scanned. */
var boothKey = (id) => {
	const m = id.trim().match(/^([a-z]+)[\s_-]*0*(\d+)$/i);
	return m ? `${m[1].toUpperCase()}${m[2]}` : id.trim().toUpperCase();
};
var findBooth = (list, id) => {
	const key = boothKey(id);
	return list.find((b) => boothKey(b.id) === key);
};
var summary = (list = booths) => ({
	total: list.length,
	operational: list.filter((b) => b.status === "operational").length,
	attention: list.filter((b) => b.status === "attention" || b.status === "unavailable").length,
	critical: list.filter((b) => b.status === "critical").length
});
var trendData = (base, spread) => Array.from({ length: 12 }, (_, i) => ({
	t: `${i * 2}:00`,
	value: Number((base + Math.sin(i / 1.7) * spread + i % 3 * spread * .25).toFixed(2))
}));
var tasks = [
	{
		id: "T-1042",
		boothId: "B-17",
		location: "Biochemical Engineering",
		problem: "Cooler not working — no chilling",
		reported: "30 Aug 2026, 09:12 AM",
		priority: "Urgent",
		status: "Assigned"
	},
	{
		id: "T-1041",
		boothId: "L-03",
		location: "Central Library Lobby",
		problem: "Water not available since morning",
		reported: "30 Aug 2026, 08:40 AM",
		priority: "Urgent",
		status: "In Progress"
	},
	{
		id: "T-1039",
		boothId: "H-04",
		location: "Morvi Bhawan",
		problem: "Leakage near drain outlet",
		reported: "29 Aug 2026, 06:20 PM",
		priority: "High",
		status: "Assigned"
	},
	{
		id: "T-1036",
		boothId: "D-11",
		location: "Mining Block",
		problem: "Poor water taste reported by users",
		reported: "29 Aug 2026, 02:05 PM",
		priority: "Normal",
		status: "Assigned"
	},
	{
		id: "T-1033",
		boothId: "H-15",
		location: "SN Bose Bhawan",
		problem: "Unit defunct — power fault",
		reported: "28 Aug 2026, 11:45 AM",
		priority: "Urgent",
		status: "In Progress"
	},
	{
		id: "T-1028",
		boothId: "A-03",
		location: "Academic Section",
		problem: "Filter replacement due",
		reported: "27 Aug 2026, 10:10 AM",
		priority: "Normal",
		status: "Resolved"
	},
	{
		id: "T-1025",
		boothId: "C-06",
		location: "Swatantrata Bhawan",
		problem: "Tap handle broken",
		reported: "26 Aug 2026, 04:32 PM",
		priority: "High",
		status: "Resolved"
	}
];
var complaints = [
	{
		id: "C-2201",
		boothId: "B-17",
		category: "Cooler not working",
		reported: "30 Aug 2026, 09:12 AM",
		status: "New"
	},
	{
		id: "C-2200",
		boothId: "L-03",
		category: "Water not available",
		reported: "30 Aug 2026, 08:40 AM",
		status: "Assigned"
	},
	{
		id: "C-2198",
		boothId: "H-04",
		category: "Leakage",
		reported: "29 Aug 2026, 06:20 PM",
		status: "Under Review"
	},
	{
		id: "C-2195",
		boothId: "D-19",
		category: "Poor water quality",
		reported: "29 Aug 2026, 01:02 PM",
		status: "Assigned"
	},
	{
		id: "C-2190",
		boothId: "C-06",
		category: "Other",
		reported: "28 Aug 2026, 05:50 PM",
		status: "Closed"
	}
];
//#endregion
export { findBooth as a, tasks as c, complaints as i, trendData as l, boothKey as n, statusMeta as o, booths as r, summary as s, CAMPUS_CENTER as t };
