import styles from "./CandidateCard.module.css";

function CandidateCard({name,title,salary,avatar,company_name}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" src={avatar} width="100px" height="100px" />
      <div>
        <div>Name:{name}</div>
        <div>Title and Company Name {title} {company_name}</div>
      </div>
      <div>$ Salary:{salary}</div>
    </div>
  );
}

export default CandidateCard;