// import { DatePicker } from '@/components/custom/DatePicker';
import { DateTimePicker } from '@/components/custom/DateTimePicker';
import {LoadingManager} from '@/components/custom/Loading';
import { Button } from '@/components/ui/button';
// import DatePicker from '@/components/ui/date-picker';
import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState<Date>(new Date());

  const goToNextDate = () => {
    const nextDate = new Date(date?.getFullYear(), date?.getMonth(), date.getDate() + 1)
    setDate(nextDate);
  }
  return (
    <div>
      <Button onClick={() => LoadingManager.showLoading()}>Showloading</Button>
      <Button onClick={() =>  LoadingManager.hideLoading()}>Hideloading</Button>
      <DateTimePicker value={date} granularity="day" />
      {/* <DatePicker /> */}
      <Button onClick={() => goToNextDate()}>goToNextDate</Button>
    </div>
  );
}
