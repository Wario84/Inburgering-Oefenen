
/***********************************
 * Create Code Snippets
 *********************************** */



 /***********************************
 * Challenge Seed Template
 *********************************** */

 /*
  {
   title: ``,
 	subtitle: ``,
   choices: [
  	 ``,
  	 ``,
  	 ``,
  	 ``
   ],
   solution: ``,
   explanation: ``
  },
 */

/***********************************
 * Export Challenge Array
 *********************************** */

export default {
	title: `Web Technologies`,
	category: `Web Technologies`,
	challenges: [
		{
			title: `1. Wat is de gewoonte in Nederland als iemand is geslaagd voor het diploma op het voortgezet onderwijs?`,
				choices: [
				`De schooltas buiten hangen.`,
				`De jas buiten hangen.`,
				`Het diploma buiten hangen.`,
			],
			solution: `1`,
			explanation: `.`
		},
		{
			title: `2. U ziet een jongen met een bal. Hij schopt de bal tegen uw winkelraam. Het raam is kapot en uw spullen ook. U bent boos. Mag u de jongen slaan?`,
			choices: [
				`Nee, maar u pakt de jongen en trekt hem hard aan zijn arm.`,
				`Nee, maar u pakt de bal en maakt de bal kapot.`,
				`Nee, u vraagt aan de jongen hoe hij heet en waar hij woont. U raakt hem niet aan.`,
			],
			solution: `3`,
			explanation: ``
	  },
		{
			title: `3. In Nederland zijn heel veel politieke partijen. De partijen zijn rechts, links of middenpartijen. Welke combinatie is goed?`,
			choices: [
			 `Het CDA = links, De PvdA = midden, De VVD = rechts.`,
			 `Het CDA = midden, De PvdA = links, De VVD = rechts.`,
			 `Het CDA = rechts, De PvdA = links, De VVD = midden.`,
			],
			solution: `2`,
			explanation: ``
	  },
		{
			title: `4. Hassan wil graag in een schoenwinkel werken. De chef zegt dat Nederlanders harder werken. Hij wil Hassan niet aannemen. Wat kan Hassan het beste doen?`,
			choices: [
				`Naar de politie gaan.`,
				`Naar de Nationale Ombudsman gaan.`,
				`aar het Anti Discriminatie Bureau gaan.`,
			],
			solution: `3`,
			explanation: ``
	  },
		{
			title: `What service to CDNs provide?`,
			subtitle: `Understanding CDNs`,
			choices: [
				`A CDN (content delivery or distribution network) is designed to provide web content
					with high availability and high performance.`,
				`A CDN makes real-time communication between web clients very efficient.`,
				`CDNs are responsible for routing web requests to destination servers.`,
				`None of these are correct.`
			],
			solution: `0`,
			explanation: `A CDN is a content delivery network primarily responsible for serving
				static web assets in a very performant manner. CDNs can reduce server traffic by handling
				specific requests and are often geographically distributed in a way to handle requests
				more efficiently. A large percentage of web traffic is served via CDNs today.`
	  },
	]
};
