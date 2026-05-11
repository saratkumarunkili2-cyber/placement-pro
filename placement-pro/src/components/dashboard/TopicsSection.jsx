function TopicsSection({ 
    topics,
  completedTopics,
  setCompletedTopics
 })
  {

  return (

    <div>

      <h1>Topics Section</h1>

      <p>
        {topics.length} Topics Available
      </p>

      {topics.map((topic, index) => (

        <div key={index}>

          <input type="checkbox" />

          <span>{topic}</span>

        </div>

      ))}

    </div>

  );
}

export default TopicsSection;