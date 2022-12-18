export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validatedContentLength(content: string): boolean {
    return content.length > 5 && content.length <= 250;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validatedContentLength(content);

    if (isContentLengthValid) {
      throw new Error('Content length error');
    }
  
    this.content = content;
  }
}