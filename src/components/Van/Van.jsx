import { Link } from 'react-router-dom';
import { useVans } from '../../hooks/Van/Van.jsx';
import { nanoid } from 'nanoid';

export const Vans = () => {
  const { isLoading, error, vans, createVan,
    updateVan,
    deleteVan
  } = useVans();

  const handleCreateVan = () => {
    const newVan = { id: nanoid(), name: 'New Van' };
    createVan(newVan);
  };

  const handleUpdateVan = (id, updates) => {
    const today = new Date();
    // request a weekday along with a long date
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    // an application may want to use UTC and make that visible
    // options.timeZone = "UTC";
    options.timeZoneName = "short";
    const lastUpdated = new Intl.DateTimeFormat("en-US", options).format(today);
    // "Thursday, December 20, 2012, EDT"
    updateVan({ id, ...updates, lastUpdated });
  };

  const handleDeleteVan = (id) => {
    // const today = new Date();
    // request a weekday along with a long date
    let options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    // an application may want to use UTC and make that visible
    // options.timeZone = "UTC";
    options.timeZoneName = "short";

    // "Thursday, December 20, 2012, EDT"

    // TO-DO If you want to remove
    // const lastUpdated = new Intl.DateTimeFormat("en-US", options).format(today);
    // deleteVan(id, lastUpdated);
    deleteVan(id);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const vanElements = vans.map(van => (

    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} alt='van' />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<span>/days</span></p>
          <p>{van.lastUpdated}<span></span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
      <button onClick={() => handleDeleteVan(van.id)}>Delete</button>
      <button onClick={() => handleUpdateVan(van.id, van)}>Update</button>
    </div>
  ))

  return (
    <>
      <h1>vans</h1>
      <button onClick={handleCreateVan}>Create van</button>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <div className="van-list">
          {vanElements}
        </div>
      </div>
    </>
  );
};