import React, {
  createContext,
  useState,
  useMemo,
  PropsWithChildren,
  useEffect,
  useRef
} from 'react';

import AppModal from '../components/shared/AppModal';
import AppButton from '../components/shared/AppButton';
import AppIconButton from '../components/shared/AppIconButton';

export const GetInviteContext = createContext<[boolean, (val: boolean) => void] | null>(null);

const GetInviteProvider = ({
  children
}: PropsWithChildren<{}>) => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const timerID = useRef<NodeJS.Timeout | null>(null);

  const onSetVisible = (val: boolean) => setVisible(val);

  const providerValue = useMemo<[boolean, (val: boolean) => void]>(() => [visible, onSetVisible], [
    visible, setVisible
  ]);

  useEffect(() => {
    // reset form
    if (visible) {
      setEmail('');
      setIsSubmitting(false);
      setSubmitted(false);
    }
    return () => {
      // cleartimeout to avoid memory leakage
      if (timerID.current) {
        clearTimeout(timerID.current);
      }
    }
  }, [visible, setIsSubmitting, setSubmitted, setEmail]);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if(email === '') {
      return;
    }
    setIsSubmitting(true);
    timerID.current = setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  }

  return (
    <GetInviteContext.Provider value={providerValue}>
      {children}
      <AppModal visible={visible}>
        <div className="bg-white p-8 max-w-md m-auto relative">
          {
            submitted ? (
              <div className="flex flex-col justify-center">
                <div className="flex justify-center items-end">
                  <AppIconButton
                    className="w-50px h-50px rounded-full bg-grey flex justify-center items-center text-18px"
                    icon="check"
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 15"
                    color="none"
                  />
                </div>
                <p className="text-base text-center mt-5 mb-5">
                  You're welcome. Invitation from Photosnap is in your mailbox.
                  We can't wait to have you onboard. 🤩
                </p>
                <AppButton 
                  className="justify-center" 
                  type="button"
                  onClick={() => onSetVisible(false)}
                >
                    Carry On
                </AppButton>
              </div>
            ) : (
              <div>
                <h3 className="font-bold tracking-wider mb-10 uppercase text-xl">
                  Get Invited & Involved
                </h3>
                <form onSubmit={onSubmit}>
                  <div className="mb-8">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      placeholder="Enter Your Email here..."
                      className="block w-full border-0 px-4 py-1.5
               text-black shadow-sm ring-1 ring-inset
                ring-black/40 focus:outline-none placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-black 
                sm:text-sm sm:leading-6"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <AppButton
                      variant="outlined"
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => onSetVisible(false)}
                    >
                      Cancel
                    </AppButton>
                    <AppButton
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </AppButton>
                  </div>
                </form>
              </div>
            )
          }
        </div>
      </AppModal>
    </GetInviteContext.Provider>
  );
}

export default GetInviteProvider;