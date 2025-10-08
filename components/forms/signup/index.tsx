import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignupForm({
  handleClose
}: {
  handleClose: () => void;
}) {
  return (
    <DialogContent className="sm:max-w-[425px] text-black">
      <DialogHeader>
        <DialogTitle>Sign Up for SurveyStream</DialogTitle>
        <DialogDescription>
          Create an account to start earning rewards.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            className="col-span-3"
          />
        </div>
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
            placeholder="••••••••"
            className="col-span-3"
          />
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox id="newsletter" />
          <label
            htmlFor="newsletter"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Receive newsletter
          </label>
        </div>
      </div>
      <div className="flex justify-end"></div>
      <Button type="submit" className="w-full" onClick={handleClose}>
        Sign Up
      </Button>
    </DialogContent>
  );
}
