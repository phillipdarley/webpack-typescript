export function getFutureDay(numOfDaysInFuture: number): Date{
     let future = new Date();
     future.setDate(future.getDate() + numOfDaysInFuture);
     return future;
}