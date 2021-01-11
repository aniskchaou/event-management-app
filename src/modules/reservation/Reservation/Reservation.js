import React, { useEffect } from 'react';

import './Reservation.css';
import { LoadJS } from './../../../components/init';

const deleteTask=()=>{
  return  window.confirm("Êtes-vous sûr de vouloir supprimer cette tache ?")
}

const Reservation = ()  => {
  useEffect(() => {
    // Runs ONCE after initial rendering
    LoadJS()
   
  }, []);
  
  return(
  <div className="card">
    <div className="card-header">
      <strong className="card-title">Résévations</strong>
    </div>
    <div className="card-body">
      <table id="bootstrap-data-table" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Utilisateur</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Message</th>
            <th>Nom evenement</th>
            <th>Date</th>
            <th>Nombre de membre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>tiger@gmail.com</td>
            <td>35353532</td>
            <td>hello</td>
            <td>match de foot</td>
            <td>12/12/2020</td>
            <td>4</td>
            <td><button type="button" data-toggle="modal" data-target="#viewReservation" class="btn btn-primary btn-sm"><i class="fas fa-address-book"></i></button>
              <button type="button" data-toggle="modal" data-target="#editReservation"class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
              <button type="button" class="btn btn-danger btn-sm" onClick={deleteTask}><i class="fas fa-trash-alt"></i></button></td>

          </tr>

        </tbody>
        <tfoot> <tr>
            <th>Utilisateur</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Message</th>
            <th>Nom evenement</th>
            <th>Date</th>
            <th>Nombre de membre</th>
            <th>Actions</th>
          </tr></tfoot>
      </table>
      <button  type="button" data-toggle="modal" data-target="#addReservation" className="btn btn-success btn-sm">Ajouter</button>

      <div class="modal fade" id="addReservation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="viewReservation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
          
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="editReservation" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)};

Reservation.propTypes = {};

Reservation.defaultProps = {};

export default Reservation;
