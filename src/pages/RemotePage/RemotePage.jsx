import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBanks, getOneBank } from "../../redux/banks/operations";
import { getBank } from "../../redux/banks/selectors";
import Button from "../../components/Button";
import ChangeBankForm from "../../components/ChangeBankForm";
import CreateBankForm from "../../components/CreateBankForm";
import Container from "../../components/Container";
import Modal from "../../components/Modal";
import TableBank from "../../components/Table/TableBank";
import TableCalculate from "../../components/TableCalculate";
import ExChangeRates from "../../components/ExChangeRates";
import s from "./RemotePage.module.css";

export default function RemotePage() {
  const [modal, setModal] = useState(false);
  const [modalChange, setModalChange] = useState(false);
  const banks = useSelector(getBank);
  const dispatch = useDispatch();
  const toggleModal = () => setModal((state) => !state);
  const toggleChangeModal = (e) => {
    const id = e.target.dataset.source;
    if (e.target.dataset) {
      setModalChange(true);
      dispatch(getOneBank(id));
    }
  };
  useEffect(() => {
    dispatch(fetchBanks());
  }, [dispatch]);

  return (
    <section className={s.add}>
      <Container color={{ position: "relative" }}>
        <ExChangeRates />
        {banks.length > 0 ? (
          <>
            <h1 className={s.section_title}>Credit Calculator</h1>
            <div className={s.table__wrapper}>

            <TableBank banks={banks} onChange={toggleChangeModal} />
            </div>

          </>
        ) : (
          <h1>Not Banks</h1>
        )}
        <Button
          type={"button"}
          onClick={toggleModal}
          children={"Create Bank"}
        />
       
        {banks.length > 0 && <TableCalculate banks={banks} />}
        {modal && (
          <Modal onClose={toggleModal}>
            <CreateBankForm onSave={toggleModal} />
          </Modal>
        )}
        {modalChange && (
          <Modal onClose={() => setModalChange((prev) => !prev)}>
            <ChangeBankForm onSave={() => setModalChange(false)} />
          </Modal>
        )}
      </Container>
    </section>
  );
}
