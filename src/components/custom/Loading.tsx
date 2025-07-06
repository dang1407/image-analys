import { useEffect, useState } from 'react';
import { Spinner } from './Spinner';

export const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = LoadingManager.subscribe(setIsLoading);
    return () => unsubscribe();
  }, []);

  if (!isLoading) return null;

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/10 flex justify-center items-center z-50'>
      <Spinner size="medium" />
    </div>
  );
};

type Callback = (isLoading: boolean) => void;

class LoadingManager {
  private static listeners: Callback[] = [];
  private static loading = false;

  static showLoading() {
    this.loading = true;
    this.notify();
  }

  static hideLoading() {
    this.loading = false;
    this.notify();
  }

  static subscribe(callback: Callback) {
    this.listeners.push(callback);
    // Gửi trạng thái ban đầu
    callback(this.loading);

    return () => {
      this.listeners = this.listeners.filter((cb) => cb !== callback);
    };
  }

  private static notify() {
    this.listeners.forEach((cb) => cb(this.loading));
  }
}

export {LoadingManager};
