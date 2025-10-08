import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginForm({
  handleClose
}: {
  handleClose: () => void;
}) {
  return (
    <DialogContent className="sm:max-w-[425px] text-black">
      <DialogHeader>
        <DialogTitle>Login to SurveyStream</DialogTitle>
        <DialogDescription>
          Enter your credentials to access your account.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            defaultValue="user@example.com"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-right">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            defaultValue="password"
            className="col-span-3"
          />
        </div>
      </div>
      <div className="flex justify-end"></div>
      <Button type="submit" onClick={handleClose}>
        Login
      </Button>
    </DialogContent>
  );
}
