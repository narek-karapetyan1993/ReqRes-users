import { useAppSelector } from "app/hooks";
import { selectUsers } from "features/users/usersSlice";
import { EIcons } from "helpers/enumeration";
import { Icon } from "helpers/Icon";
import React, { useEffect } from "react";
import { useParams } from "react-router";

import styles from "./UserInfo.module.scss";

export default function UserInfo() {
  const users = useAppSelector(selectUsers);
  const { id } = useParams();
  const user = users.users.data.find((element) => element.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.textBlock}>
          <p className={styles.text}>
            Клиенты видят в нем эксперта по вопросам разработки комплексных
            решений финансовых продуктов, включая такие аспекты, как
            организационная структура, процессы, аналитика и ИТ-компоненты. Он
            помогает клиентам лучше понимать структуру рисков их бизнеса,
            улучшать процессы за счет применения новейших технологий и
            увеличивать продажи, используя самые современные аналитические
            инструменты.
          </p>
          <p className={styles.text}>
            В работе с клиентами недостаточно просто решить конкретную проблему
            или помочь справиться с трудностями. Не менее важно уделять внимание
            обмену знаниями: "Один из самых позитивных моментов — это осознание
            того, что ты помог клиенту перейти на совершенно новый уровень
            компетентности, уверенность в том, что после окончания проекта у
            клиента есть все необходимое, чтобы дальше развиваться
            самостоятельно".
          </p>
          <p className={styles.text}>
            Помимо разнообразных проектов для клиентов финансового сектора, Он
            ведет активную предпринимательскую деятельность. Он является
            совладельцем сети клиник эстетической медицины в Швейцарии,
            предлагающей инновационный подход к красоте, а также инвестором
            других бизнес-проектов.
          </p>
        </div>
        <div className={styles.contacts}>
          <a className={styles.phone} href="tel:+7(954)3334455">
            <Icon name={EIcons.phone} />
            +7 (954) 333-44-55
          </a>
          <a className={styles.mail} href={`mailto:${user?.email}`}>
            <Icon name={EIcons.mail} />

            {user?.email}
          </a>
        </div>
      </div>
    </div>
  );
}
