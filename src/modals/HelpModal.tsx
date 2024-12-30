import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

interface HelpModalProps {
  trigger: JSX.Element;
}

export default function HelpModal(props: HelpModalProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      closeIcon={true}
      closeOnEscape={true}
      closeOnDimmerClick={false}
      basic
      dimmer="blurring"
      onClose={() => {
        setOpen(false);
      }}
      onOpen={() => setOpen(true)}
      open={open}
      size="small"
      trigger={props.trigger}
    >
      <Modal.Content>
        <Segment inverted key={'SegmentMetrixPlace'}>
          <div className="to-center">
            <h4 className={styles.h4}>metrix.place Help </h4>{' '}
          </div>{' '}
          <hr className="to-space-bot" />
          <p className="text-modal-help">
            {' '}
            <Image
              alt="metrix"
              width="50"
              height="50"
              className={styles.metrix_icon}
              src="/images/2021_Metrix_Icon_Silver.png"
            />{' '}
            Any address can contribute by setting the color of a pixel through a
            MetrixCoin transaction. This includes both externally owned accounts
            and smart contracts.
          </p>
          <p className="text-modal-help">
            {' '}
            <Image
              alt="metrix"
              width="50"
              height="50"
              className={styles.metrix_icon}
              src="/images/2021_Metrix_Icon_Silver.png"
            />{' '}
            Once a transaction is confirmed, the web3 dapp automatically updates
            images based on the contract state, ensuring that the place is
            always up to date.
          </p>
          <p className="text-modal-help">
            {' '}
            <Image
              alt="metrix"
              width="50"
              height="50"
              className={styles.metrix_icon}
              src="/images/2021_Metrix_Icon_Silver.png"
            />{' '}
            To participate, simply access the blockchain through a MetrixCoin
            wallet or utilize a web3 wallet like MetriMask.
          </p>
          <div className="modal-buttons">
            <a
              className="to-button"
              href="https://chrome.google.com/webstore/detail/metrimask/pgjlaaokfffcapdcakncnhpmigjlnpei"
              target="_blank"
            >
              {' '}
              MetriMask{' '}
            </a>

            <a
              className="to-button"
              href="https://play.google.com/store/apps/details?id=com.metrimask_mobile"
              target="_blank"
            >
              {' '}
              MetriMask Mobile{' '}
            </a>
          </div>
        </Segment>
      </Modal.Content>
    </Modal>
  );
}
