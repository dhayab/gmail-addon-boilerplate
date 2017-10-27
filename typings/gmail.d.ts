declare namespace GoogleAppsScript {
	export module Gmail {
		export interface GmailApp {
			createDraft(recipient: string, subject: string, body: string): GmailDraft;
			createDraft(recipient: string, subject: string, body: string, options: GmailDraftOptions): GmailDraft;
			getDraft(draftId: string): GmailDraft;
			getDrafts(): GmailDraft[];
			setCurrentMessageAccessToken(accessToken: string): void;
		}

		export interface GmailDraft {
			/**
			 * Deletes this draft message.
			 */
			deleteDraft(): void;
			/**
			 * Gets the ID of this draft message.
			 */
			getId(): string;
			/**
			 * Returns a GmailMessage representing this draft.
			 */
			getMessage(): GmailMessage;
			/**
			 * Returns the ID of the `GmailMessage` representing this draft.
			 */
			getMessageId(): string;
			/**
			 * Sends this draft email message.
			 */
			send(): GmailMessage;
			/**
			 * Replaces the contents of this draft message.
			 */
			update(recipient: string, subject: string, body: string): GmailDraft;
			/**
			 * Replaces the contents of this draft message using optional arguments.
			 */
			update(recipient: string, subject: string, body: string, options: GmailDraftOptions): GmailDraft;
		}

		export type GmailDraftOptions = {
			/**
			 * An array of files to send with the email.
			 */
			attachments?: Base.BlobSource[];
			/**
			 * A comma-separated list of email addresses to BCC.
			 */
			bcc?: string;
			/**
			 * A comma-separated list of email addresses to CC.
			 */
			cc?: string;
			/**
			 * The address that the email should be sent from, which must be one of the values returned by `GmailApp.getAliases()`.
			 */
			from?: string;
			/**
			 * If set, devices capable of rendering HTML will use it instead of the required body argument; you can add an optional `inlineImages` field in HTML body if you have inlined images for your email.
			 */
			htmlBody?: string;
			/**
			 * A JavaScript object containing a mapping from image key (`String`) to image data (`BlobSource`) ; this assumes that the `htmlBody` parameter is used and contains references to these images in the format `<img src="cid:imageKey" />`.
			 */
			inlineImages?: { [imageKey: string]: Base.BlobSource };
			/**
			 * The name of the sender of the email (default: the user's name).
			 */
			name?: string;
			/**
			 * An email address to use as the default reply-to address (default: the user's email address).
			 */
			replyTo?: string;
		}
	}
}
