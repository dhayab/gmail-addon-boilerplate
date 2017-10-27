export function buildAddOn(event: GoogleAppsScript.Card.ActionEvent) {
	GmailApp.setCurrentMessageAccessToken(event.messageMetadata.accessToken);

	const section = CardService.newCardSection()
		.addWidget(CardService.newTextParagraph().setText('World!'));

	const card = CardService.newCardBuilder()
		.setHeader(CardService.newCardHeader().setTitle('Hello'))
		.addSection(section);

		return [card.build()];
}
