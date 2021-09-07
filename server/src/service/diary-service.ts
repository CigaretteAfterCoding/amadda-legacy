import { Request, Response } from 'express';
import DiaryRepo from 'Model/diary-model';


class DiaryService {
  static async addSalon(req: Request, res: Response): Promise<void> {
    const { title, content, date, weather, is_private } = req.body;
    const isPrivate = is_private ? 1 : 0;
    const userId = parseInt((req.user as any).id);
    const diaryId = await DiaryRepo.addDiary({ 
      title, 
      content,
      date,
      weather,
      isPrivate,
      userId 
    });

    res.status(200).json(diaryId);
  }

  // static async getSalon(req: Request, res: Response): Promise<void> {
  //   const salonId = parseInt(req.params.salonId);
  //   const salon = await SalonRepo.findOneSalon(salonId);
  //   const participants = await SalonRepo.findAllUsersInSalon(salonId);
  //   const books = await SalonRepo.findAllBooksInSalon(salonId);
  //   salon.books = books;
  //   salon.participants = participants;
  //   res.status(200).json(salon);
  // }

  // static async updateSalon(req: Request, res: Response): Promise<void> {
  //   const salonId = parseInt(req.params.salonId);
  //   const { name } = req.body;
  //   await SalonRepo.updateSalon({ salonId, name });
  //   res.status(200).json({ message: 'modified successfully' });
  // }

  // static async getBook(req: Request, res: Response): Promise<void> {
  //   const bookId = parseInt(req.params.bookId);
  //   const book = await SalonRepo.findOneBook(bookId);
  //   const reviews = await SalonRepo.findAllReviewsInBook(bookId);
  //   const quotes = await SalonRepo.findAllQuotesInBook(bookId);
  //   book.reviews = reviews;
  //   book.quotes = quotes;
  //   res.status(200).json(book);
  // }

  // static async addBook(req: Request, res: Response): Promise<void> {
  //   const salonId = parseInt(req.params.salonId);
  //   const { title, author, description } = req.body;
  //   const result = await SalonRepo.createBook({ title, author, description, salonId });
  //   res.status(200).json(result);
  // }

  // static async deleteBook(req: Request, res: Response): Promise<void> {
  //   const bookId = parseInt(req.params.bookId);
  //   const { affectedRows } = await SalonRepo.deleteBook(bookId);
  //   if (affectedRows > 0) {
  //     res.status(200).json({ message: 'deleted successfully' });
  //     return;
  //   }
  //   res.status(200).json({ messgage: 'no items to delete' });
  // }

  // static async addReview(req: Request, res: Response): Promise<void> {
  //   const bookId = parseInt(req.params.bookId);
  //   const userId = parseInt((req.user as any).id);
  //   const { title, content } = req.body;
  //   const result = await SalonRepo.createReview({ title, content, bookId, userId });
  //   res.status(200).json(result);
  // }

  // static async updateReview(req: Request, res: Response): Promise<void> {
  //   const reviewId = parseInt(req.params.reviewId);
  //   const { title, content } = req.body;
  //   await SalonRepo.updateReview({ title, content, reviewId });
  //   res.status(200).json({ message: 'modified successfully' });
  // }

  // static async deleteReview(req: Request, res: Response): Promise<void> {
  //   const reviewId = parseInt(req.params.reviewId);
  //   await SalonRepo.deleteReview(reviewId);
  //   res.status(200).json({ message: 'deleted successfully' });
  // }

  // static async getAllReviewComments(req: Request, res: Response): Promise<void> {
  //   const reviewId = parseInt(req.params.reviewId);
  //   const result = await SalonRepo.findAllReviewComments(reviewId);
  //   res.status(200).json(result);
  // }

  // static async addReviewComment(req: Request, res: Response): Promise<void> {
  //   const reviewId = parseInt(req.params.reviewId);
  //   const bookId = parseInt(req.params.bookId);
  //   const userId = parseInt((req.user as any).id);
  //   const { comment } = req.body;
  //   const result = await SalonRepo.createReviewComment({ comment, reviewId, bookId, userId });
  //   res.status(200).json(result);
  // }

  // static async updateReviewComment(req: Request, res: Response): Promise<void> {
  //   const commentId = parseInt(req.params.commentId);
  //   const { comment } = req.body;
  //   await SalonRepo.updateReviewComment({ comment, commentId });
  //   res.status(200).json({ message: 'modified successfully' });
  // }

  // static async deleteReviewComment(req: Request, res: Response): Promise<void> {
  //   const commentId = parseInt(req.params.commentId);
  //   await SalonRepo.deleteReviewComment(commentId);
  //   res.status(200).json({ message: 'deleted successfully' });
  // }

  // static async addQuote(req: Request, res: Response): Promise<void> {
  //   const bookId = parseInt(req.params.bookId);
  //   const userId = parseInt((req.user as any).id);
  //   const { content, page } = req.body;
  //   const result = await SalonRepo.createQuote({ content, page, bookId, userId });
  //   res.status(200).json(result);
  // }

  // static async updateQuote(req: Request, res: Response): Promise<void> {
  //   const quoteId = parseInt(req.params.quoteId);
  //   const { content, page } = req.body;
  //   await SalonRepo.updateQuote({ content, page, quoteId });
  //   res.status(200).json({ message: 'modified successfully' });
  // }

  // static async deleteQuote(req: Request, res: Response): Promise<void> {
  //   const quoteId = parseInt(req.params.quoteId);
  //   await SalonRepo.deleteQuote(quoteId);
  //   res.status(200).json({ message: 'deleted successfully' });
  // }

  // static async getAllQuoteComments(req: Request, res: Response): Promise<void> {
  //   const quoteId = parseInt(req.params.quoteId);
  //   const result = await SalonRepo.findAllQuoteComments(quoteId);
  //   res.status(200).json(result);
  // }

  // static async addQuoteComment(req: Request, res: Response): Promise<void> {
  //   const quoteId = parseInt(req.params.quoteId);
  //   const bookId = parseInt(req.params.bookId);
  //   const userId = parseInt((req.user as any).id);
  //   const { comment } = req.body;
  //   const result = await SalonRepo.createQuoteComment({ comment, quoteId, bookId, userId });
  //   res.status(200).json(result);
  // }

  // static async updateQuoteComment(req: Request, res: Response): Promise<void> {
  //   const commentId = parseInt(req.params.commentId);
  //   const { comment } = req.body;
  //   await SalonRepo.updateQuoteComment({ comment, commentId });
  //   res.status(200).json({ message: 'modified successfully' });
  // }

  // static async deleteQuoteComment(req: Request, res: Response): Promise<void> {
  //   const commentId = parseInt(req.params.commentId);
  //   await SalonRepo.deleteQuoteComment(commentId);
  //   res.status(200).json({ message: 'deleted successfully' });
  // }
}

export default DiaryService;
