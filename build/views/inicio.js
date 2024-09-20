
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                           ${view.vista_login()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_listado() + view.modal_fotos() + view.modal_datos()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_nuevo()}
                        </div>
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        vista_login:()=>{
            return `
            <br><br>
            <div class="card card-rounded col-sm-12 col-lg-5 col-xl-5 col-md-5 shadow">
                <div class="card-body p-4">

                    <div class="form-group text-center">
                        <img src="./favicon.png" width="100px" height="100px">
                    </div>
                    
                    <br>
                    
                    <h2 class="text-center">Laboratorio Clinico Bioquimica</h2>

                    <br>
                    
                    <div class="form-group text-center">
                        <label class="negrita">Clave de acceso</label>
                        <input type="password" class="form-control negrita" id="txtP" autocomplete="off">
                    </div>
                    
                    <br>

                    <div class="form-group text-center">
                        <button class="btn btn-success btn-circle btn-xl hand shadow" id="btnI">
                            <i class="fal fa-lock"></i>
                        </button> 
                    </div>

                    <br>
                    <small class="negrita text-naranja">By Alexis Burgos (${versionapp})</small>


                </div>
            </div>
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-3">

                    <div class="form-group">
                        <label class="negrita">Buscar por codigo o por nombre</label>
                        <div class="input-group">
                            <input type="text" class="form-control negrita text-danger border-naranja " autocomplete="off" id="txtFiltrar" placeholder="Escriba un codigo o nombre para buscar...">
                            
                            <button class="btn btn-info hand" id="btnBuscar">
                                <i class="fal fa-search"></i>
                            </button>
                        </div>
                        <div class="input-group">    
                            <input type="date" class="form-control negrita text-info" id="txtFechaAtencion">
                            <select class="form-control negrita" id="cmbTipoLista">
                                <option class="negrita text-danger" value="PENDIENTES">PENDIENTES</option>
                                <option class="negrita text-success" value="ATENDIDOS">ATENDIDOS</option>
                            </select>
                        </div>
                    </div>
                    
                    <br>

                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-info negrita text-white">
                                <tr>
                                    <td>EMPRESA</td>
                                    <td>CODIGO</td>
                                    <td>APELLIDOS Y NOMBRES</td>
                                    <td>PUESTO / AREA</td>
                                    <td>T.SALUD</td>
                                    <td>T.ALIMENTOS</td>
                                    <td>T.PULMONES</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataClientes">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-danger btn-circle btn-xl hand shadow btn-bottom-l" onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-lock"></i>
            </button> 

             <button class="btn btn-success btn-circle btn-xl hand shadow btn-bottom-r" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button> 

            `
        },
        vista_nuevo:()=>{
            return `
              <div class="card card-rounded col-sm-12 col-lg-8 col-xl-8 col-md-12 shadow">
                <div class="card-body p-4">

                    <div class="form-group">
                        <label class="negrita">Empresa</label>
                        <select class="form-control negrita" id="cmbEmpresa">
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="negrita">CODIGO</label>
                        <input type="text" class="form-control negrita" id="txtCodigo" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <label class="negrita">DPI CUI</label>
                        <input type="text" class="form-control negrita" id="txtDPI" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Apellidos y Nombres</label>
                        <input type="text" class="form-control negrita" id="txtNombre" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Fecha Nacimiento</label>
                        <input type="date" class="form-control negrita" id="txtFechaNacimiento">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Area de Trabajo</label>
                        <input type="text" class="form-control negrita" id="txtAreaTrabajo">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Sector</label>
                        <input type="text" class="form-control negrita" id="txtSector">
                    </div>

                    <hr class="solid">

                    <h5 class="negrita text-danger text-center">Tarjetas</h5>

                    <div class="row">
                        
                        <div class="col-4">
                            <div class="form-group">
                                <label class="negrita">T. Salud</label>
                                <select class="form-control negrita" id="cmbTSalud">
                                    <option value="SN">SN</option>
                                    <option value="SI">SI</option>
                                    <option value="NO">NO</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="form-group">
                                <label class="negrita">T. Alimentos</label>
                                <select class="form-control negrita" id="cmbTAlimentacion">
                                    <option value="SN">SN</option>
                                    <option value="SI">SI</option>
                                    <option value="NO">NO</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="form-group">
                                <label class="negrita">T. Pulmones</label>
                                <select class="form-control negrita" id="cmbTPulmones">
                                    <option value="SN">SN</option>
                                    <option value="SI">SI</option>
                                    <option value="NO">NO</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <hr class="solid">

                    <h5 class="negrita text-danger text-center">Fotos del Individuo</h5>
            
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card card-rounded shadow col-12">
                                <div class="card-body p-5 text-center">
                                    <label class="negrita">Foto Selfie</label>
                                    <input type="file" id="txtFoto1" class="form-control" onchange="preview_img('txtFoto1','img1');">
                                    <img src="" id="img1" width="150px" height="150px">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card card-rounded shadow col-12">
                                <div class="card-body p-5 text-center">
                                    <label class="negrita">Foto DPI Front</label>
                                    <input type="file" id="txtFoto2" class="form-control" onchange="preview_img('txtFoto2','img2');">
                                     <img src="" id="img2" width="150px" height="150px">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card card-rounded shadow col-12">
                                <div class="card-body p-5 text-center">
                                    <label class="negrita">Foto DPI Tras</label>
                                    <input type="file" id="txtFoto3" class="form-control" onchange="preview_img('txtFoto3','img3');">
                                     <img src="" id="img3" width="150px" height="150px">
                                </div>
                            </div>
                        </div>

                        

                    </div>

            
            
                </div>
            </div>

            <button class="btn btn-secondary btn-circle btn-xl hand shadow btn-bottom-l" onclick="document.getElementById('tab-dos').click()">
                <i class="fal fa-arrow-left"></i>
            </button> 

             <button class="btn btn-info btn-circle btn-xl hand shadow btn-bottom-r" id="btnGuardar">
                <i class="fal fa-save"></i>
            </button> 
            `
        },
        modal_empresas:()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_menu_principal">
            <div class="modal-dialog modal-dialog-right modal-xl">
                <div class="modal-content">
                   
                    <div class="modal-body p-2">
                        <div class="card card-rounded shadow p-2">
                            <div class="card-body">
                                
                                <div class="form-group">
                                    <label>Nombre de la Empresa</label>
                                    <input type="text" class="form-control negrita" id="txtNombreEmpesa">
                                </div>

                            
                                <div class="form-group text-rigth">

                                    <button class="btn btn-xl btn-circle btn-info hand shadow" id="btnGuardarEmpresa">
                                        <i class="fal fa-save"></i>
                                    </button>
                                
                                </div>
                            
                                <br>
                                <table class="table table-responsive h-full">
                                    
                                </table>


                            </div>
                        </div>
                    </div>
                    <div class="modal-footer text-center">
                        <button class="btn btn-circle btn-xl btn-secondary hand shadow" data-dismiss="modal">
                            <i class="fal fa-arrow-left"></i>
                        </button>
                    </div>

                </div>
            </div>
        </div>
            
            `
        },
        modal_fotos:()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_fotos">
            <div class="modal-dialog modal-dialog-right modal-xl">
                <div class="modal-content">
                   
                    <div class="modal-body p-2">
                        <div class="card card-rounded shadow p-2">
                            <div class="card-body">
                                

                                <div class="form-group">
                                    <h3 class="negrita text-info" id="lbNomcliente">CONSUMIDOR FINAL</h3>
                                    
                                    <label class="negrita text-danger" id="lbCodcliente">0000</label>
                                </div>

                                <hr class="solid">

                                <h5 class="negrita text-danger text-center">Fotos del Individuo</h5>
                                <div class="negrita text-secondary" id="lbStatusFotos"></div>

                                <div class="row">
                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div class="card card-rounded shadow col-12">
                                            <div class="card-body p-5 text-center">
                                                <label class="negrita">Foto Selfie</label>
                                                <input type="file" id="txtFoto1E" class="form-control" onchange="preview_img('txtFoto1E','img1E');">
                                                <img src="" id="img1E" width="150px" height="150px">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div class="card card-rounded shadow col-12">
                                            <div class="card-body p-5 text-center">
                                                <label class="negrita">Foto DPI Front</label>
                                                <input type="file" id="txtFoto2E" class="form-control" onchange="preview_img('txtFoto2E','img2E');">
                                                <img src="" id="img2E" width="150px" height="150px">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                                        <div class="card card-rounded shadow col-12">
                                            <div class="card-body p-5 text-center">
                                                <label class="negrita">Foto DPI Tras</label>
                                                <input type="file" id="txtFoto3E" class="form-control" onchange="preview_img('txtFoto3E','img3E');">
                                                <img src="" id="img3E" width="150px" height="150px">
                                            </div>
                                        </div>
                                    </div>

                                    

                                </div>

                                <div class="row">
                                    <div class="col-6 text-left">
                                        <button class="btn btn-circle btn-xl btn-secondary hand shadow" data-dismiss="modal">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <button class="btn btn-info btn-circle btn-xl hand shadow" id="btnActualizarFotos">
                                            <i class="fal fa-save"></i>
                                        </button>
                                    </div>
                                    
                                </div>
                            
                                
                              


                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            
            `
        },
        modal_datos:()=>{
            return `
        <div class="modal fade js-modal-settings modal-backdrop-transparent  modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_datos">
            <div class="modal-dialog modal-dialog-right modal-xl">
                <div class="modal-content">
                   
                    <div class="modal-body p-2">
                        <div class="card card-rounded shadow p-2">
                            <div class="card-body">
                                

                                <hr class="solid">
                                <div class="negrita text-secondary" id="lbStatusDatos"></div>

                                 <div class="form-group">
                                    <label class="negrita">Empresa</label>
                                    <select class="form-control negrita" id="cmbEmpresaE">
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label class="negrita">CODIGO</label>
                                    <input type="text" class="form-control negrita" id="txtCodigoE" autocomplete="off" disabled="true">
                                </div>

                                <div class="form-group">
                                    <label class="negrita">DPI CUI</label>
                                    <input type="text" class="form-control negrita" id="txtDPIE" autocomplete="off">
                                </div>

                                <div class="form-group">
                                    <label class="negrita">Apellidos y Nombres</label>
                                    <input type="text" class="form-control negrita" id="txtNombreE" autocomplete="off">
                                </div>

                                <div class="form-group">
                                    <label class="negrita">Fecha Nacimiento</label>
                                    <input type="date" class="form-control negrita" id="txtFechaNacimientoE">
                                </div>

                                <div class="form-group">
                                    <label class="negrita">Area de Trabajo</label>
                                    <input type="text" class="form-control negrita" id="txtAreaTrabajoE">
                                </div>

                                <div class="form-group">
                                    <label class="negrita">Sector</label>
                                    <input type="text" class="form-control negrita" id="txtSectorE">
                                </div>

                                <hr class="solid">

                                <h5 class="negrita text-danger text-center">Tarjetas</h5>

                                <div class="row">
                                    
                                    <div class="col-4">
                                        <div class="form-group">
                                            <label class="negrita">T. Salud</label>
                                            <select class="form-control negrita" id="cmbTSaludE">
                                                <option value="SN">SN</option>
                                                <option value="SI">SI</option>
                                                <option value="NO">NO</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div class="form-group">
                                            <label class="negrita">T. Alimentos</label>
                                            <select class="form-control negrita" id="cmbTAlimentacionE">
                                                <option value="SN">SN</option>
                                                <option value="SI">SI</option>
                                                <option value="NO">NO</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-4">
                                        <div class="form-group">
                                            <label class="negrita">T. Pulmones</label>
                                            <select class="form-control negrita" id="cmbTPulmonesE">
                                                <option value="SN">SN</option>
                                                <option value="SI">SI</option>
                                                <option value="NO">NO</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>


                               
                                <div class="row">
                                    <div class="col-6 text-left">
                                        <button class="btn btn-circle btn-xl btn-secondary hand shadow" data-dismiss="modal">
                                            <i class="fal fa-arrow-left"></i>
                                        </button>
                                    </div>
                                    <div class="col-6 text-right">
                                        <button class="btn btn-info btn-circle btn-xl hand shadow" id="btnActualizarDatos">
                                            <i class="fal fa-save"></i>
                                        </button>
                                    </div>
                                    
                                </div>
                            
                                
                              


                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            
            `
        },
    }

    root.innerHTML = view.body();

};

function addListeners(){

    let btnI = document.getElementById("btnI");
    btnI.addEventListener('click',()=>{

        let p = document.getElementById('txtP').value || '';

        if(p==''){F.AvisoError('Escriba una clave');return;}

        if(p==GlobalClave){
            document.getElementById('txtP').value = '';
            document.getElementById('tab-dos').click();
            //get_listado();
        }else{
            F.AvisoError('Escriba una clave valida');
            return;
        }

    })


    document.getElementById('btnNuevo').addEventListener('click',()=>{
        limpiar_datos();
        document.getElementById('tab-tres').click();
    })


    document.getElementById('txtFechaNacimiento').value = F.getFecha();
    document.getElementById('txtFechaAtencion').value = F.getFecha();


    get_data_empresas()
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str +=`<option value='${r.CODIGO}'>${r.EMPRESA}</option>`
        })
        document.getElementById('cmbEmpresa').innerHTML = str;
        document.getElementById('cmbEmpresaE').innerHTML = str;
        
    })
    .catch(()=>{
        document.getElementById('cmbEmpresa').innerHTML = 'No hay datos';
        document.getElementById('cmbEmpresaE').innerHTML = 'No hay datos';
        
    })



    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{

        F.Confirmacion('Esta seguro que desea Crear este nuevo Cliente?')
        .then((value)=>{
            if(value==true){
      
                let codigo = document.getElementById('txtCodigo').value || '';
                if(codigo==''){F.AvisoError('Escriba un codigo valido');return;}
        
                let dpi = document.getElementById('txtDPI').value || '';
                if(dpi==''){F.AvisoError('Escriba un DPI CUI valido');return;}
                
                let nombre = document.getElementById('txtNombre').value || '';
                if(nombre==''){F.AvisoError('Escriba un nombre valido');return;}
        
                
                btnGuardar.disabled = true;
                btnGuardar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_cliente()
                .then(()=>{
                    F.Aviso('Cliente creado exitosamente!!');
                    
                    //get_listado();
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;

                    document.getElementById('tab-dos').click();
                
                })
                .catch(()=>{
                    F.AvisoError('No se pudo crear este cliente');
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                
                })


            }
        })

      

    })



    document.getElementById('txtFiltrar').addEventListener('keyup',(event)=>{
        if (event.key === "Enter") {
            document.getElementById("btnBuscar").click();
        }
        if (event.keycode == 13) {
            document.getElementById("btnBuscar").click();
        }
    })

    document.getElementById('btnBuscar').addEventListener('click',()=>{
        get_listado();
    })




    let btnActualizarFotos = document.getElementById('btnActualizarFotos');
    btnActualizarFotos.addEventListener('click',()=>{


        F.Confirmacion('¿Está seguro que desea ACTUALIZAR estas fotos?')
        .then((value)=>{
            if(value==true){

                
                    let f1 = document.getElementById('img1E').src;
                    let f2 = document.getElementById('img2E').src;
                    let f3 = document.getElementById('img3E').src;

                    btnActualizarFotos.disabled = true;
                    btnActualizarFotos.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                    update_fotos(selected_codempresa,selected_codcliente,f1,f2,f3)
                    .then(()=>{
                        F.Aviso('Fotos actualizadas exitosamente!!');
                        
                        btnActualizarFotos.disabled = false;
                        btnActualizarFotos.innerHTML = `<i class="fal fa-save"></i>`;

                        $("#modal_fotos").modal('hide');
                    })
                    .catch(()=>{
                        
                        F.AvisoError('No se pudo cargar las fotos nuevas, intentelo de nuevo');

                        btnActualizarFotos.disabled = false;
                        btnActualizarFotos.innerHTML = `<i class="fal fa-save"></i>`;
                    })


            }
        })

    });

    let btnActualizarDatos = document.getElementById('btnActualizarDatos');
    btnActualizarDatos.addEventListener('click',()=>{


        
        F.Confirmacion('Esta seguro que desea EDITAR este Cliente?')
        .then((value)=>{
            if(value==true){
          
                let dpi = document.getElementById('txtDPIE').value || '';
                if(dpi==''){F.AvisoError('Escriba un DPI CUI valido');return;}
                
                let nombre = document.getElementById('txtNombreE').value || '';
                if(nombre==''){F.AvisoError('Escriba un nombre valido');return;}
        
                
                btnActualizarDatos.disabled = true;
                btnActualizarDatos.innerHTML = `<i class="fal fa-save fa-spin"></i>`;
        
                update_datos_cliente()
                .then(()=>{
                    F.Aviso('Cliente actualizado exitosamente!!');
                            
                    //get_listado();
                    btnActualizarDatos.disabled = false;
                    btnActualizarDatos.innerHTML = `<i class="fal fa-save"></i>`;
        
                    $("#modal_datos").modal('hide');
                })
                .catch(()=>{
                    F.AvisoError('No se pudo crear este cliente');
                    btnActualizarDatos.disabled = false;
                    btnActualizarDatos.innerHTML = `<i class="fal fa-save"></i>`;
                })
        

            }
        })


      

    });




    F.slideAnimationTabs();

};




function initView(){

    getView();
    addListeners();

};

function preview_img(idFile,idImage){

    let file = document.getElementById(idFile).files[0]

    if (!file) {
      return;
    }
  
    new Compressor(file, {
      quality: 0.6,
  
      // The compression process is asynchronous,
      // which means you have to access the `result` in the `success` hook function.
      success(result) {
  
            //console.log(result);
            F.converBase64(result) //file
            .then((imagen)=>{
                //console.log(imagen)
                document.getElementById(idImage).src = imagen;
            })

      },
      error(err) {
        console.log('error en foto:')
        console.log(err.message);
        ocument.getElementById(idImage).src = '';
      },
    });


 

   
}


function get_data_empresas(){
    return new Promise((resolve,reject)=>{
        axios.post('/lista_empresas',{
            param:0
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data); 
            }else{
                reject(); 
            }             
        }, (error) => {
            reject();
        });
    })

}

function limpiar_datos(){

        document.getElementById('txtCodigo').value='';
        document.getElementById('txtDPI').value='';
        document.getElementById('txtNombre').value='';
        document.getElementById('txtAreaTrabajo').value='';
        document.getElementById('txtSector').value='';
        document.getElementById('cmbTSalud').value='SN';
        document.getElementById('cmbTAlimentacion').value='SN';
        document.getElementById('cmbTPulmones').value='SN';

        document.getElementById('txtFoto1').value = '';
        document.getElementById('txtFoto2').value = '';
        document.getElementById('txtFoto3').value = '';

        document.getElementById('img1').src = '';
        document.getElementById('img2').src = '';
        document.getElementById('img3').src = '';
};


function get_listado(){

    let filtro = document.getElementById('txtFiltrar').value || '';
    if(filtro==''){F.AvisoError('Escriba un codigo o nombre para buscar');return;}
    let container = document.getElementById('tblDataClientes');
    container.innerHTML = GlobalLoader;
    let str = '';

    let lastupdate = F.devuelveFecha('txtFechaAtencion'); //document.getElementById("cmbStatus").value;
    let st = document.getElementById('cmbTipoLista').value;


    axios.post('/listado_clientes',{
        filtro:filtro,
        lastupdate:lastupdate,
        st:st
    })
    .then((response) => {
        let data = response.data;
        if(Number(data.rowsAffected[0])>0){
            data.recordset.map((r)=>{
                str += `
                                <tr>
                                    <td>${r.EMPRESA}
                                        <br>
                                        <small>A:${F.convertDateNormal(r.LASTUPDATE)}</small>
                                    </td>
                                    <td>${r.CODIGO}</td>
                                    <td>${r.NOMBRE}
                                        <br>
                                        <small class="negrita text-info">${F.getEdad(r.FECHA_NACIMIENTO)}</small>
                                    </td>
                                    <td>${r.AREA}
                                        <br>
                                        <small>${r.SECTOR}</small>
                                    </td>
                                    <td>${r.SALUD}</td>
                                    <td>${r.ALIMENTOS}</td>
                                    <td>${r.PULMONES}</td>
                                    <td>
                                        <button class="btn btn-md btn-circle hand shadow btn-success" onclick="get_fotos_cliente('${r.CODEMPRESA}','${r.CODIGO}','${r.NOMBRE}')">
                                            <i class="fal fa-camera"></i>
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn btn-md btn-circle hand shadow btn-info" onclick="get_datos_cliente('${r.CODEMPRESA}','${r.CODIGO}')">
                                            <i class="fal fa-edit"></i>
                                        </button>
                                    </td>
                                </tr>
                `
            })

            container.innerHTML = str;
        }else{
            container.innerHTML = 'No hay datos...'
        }             
    }, (error) => {
        container.innerHTML = 'No hay datos...'
    });


};



function insert_cliente(){

    

    let codempresa = document.getElementById('cmbEmpresa').value;
    let codigo = document.getElementById('txtCodigo').value;
    let dpi = document.getElementById('txtDPI').value;
    let nombre = F.limpiarTexto(document.getElementById('txtNombre').value);
    let fechanacimiento = F.devuelveFecha('txtFechaNacimiento');
    let fecha = F.getFecha();
    let area = F.limpiarTexto(document.getElementById('txtAreaTrabajo').value);
    let sector = F.limpiarTexto(document.getElementById('txtSector').value);
    let tsalud = document.getElementById('cmbTSalud').value;
    let talimentos = document.getElementById('cmbTAlimentacion').value;
    let tpulmones = document.getElementById('cmbTPulmones').value;
    let f1 = document.getElementById('img1').src;
    let f2 = document.getElementById('img2').src;
    let f3 = document.getElementById('img3').src;


    return new Promise((resolve,reject)=>{
        axios.post('/insert_cliente',{
            codempresa:codempresa,
            codigo:codigo,
            dpi:dpi,
            nombre:nombre,
            fecha:fecha,
            fechanacimiento:fechanacimiento,
            area:area,
            sector:sector,
            tsalud:tsalud,
            talimentos:talimentos,
            tpulmones:tpulmones,
            f1:f1,
            f2:f2,
            f3:f3
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data); 
            }else{
                reject(); 
            }             
        }, (error) => {
            reject();
        });
    })

};


function get_fotos_cliente(codempresa,codcliente,nomclie){

        $("#modal_fotos").modal('show');

        document.getElementById('img1E').src = '';
        document.getElementById('img2E').src = '';
        document.getElementById('img3E').src = '';

        selected_codempresa = codempresa;
        selected_codcliente = codcliente;

        document.getElementById('lbNomcliente').innerText = nomclie;
        document.getElementById('lbCodcliente').innerText = codcliente;

        document.getElementById('lbStatusFotos').innerHTML = 'Cargando fotos...' + GlobalLoader

        document.getElementById('btnActualizarFotos').disabled = true;

        get_data_fotos_cliente(codempresa,codcliente)
        .then((data)=>{
            data.recordset.map((r)=>{
                document.getElementById('img1E').src = r.FOTO_SELFIE;
                document.getElementById('img2E').src = r.FOTO_DPI_1;
                document.getElementById('img3E').src = r.FOTO_DPI_2;
            })
            document.getElementById('lbStatusFotos').innerText = '';
            document.getElementById('btnActualizarFotos').disabled = false;
        
        })
        .catch(()=>{
            F.AvisoError('No se cargaron las fotos');
            document.getElementById('lbStatusFotos').innerText = 'No se cargaron las fotos';
            document.getElementById('img1E').src = '';
            document.getElementById('img2E').src = '';
            document.getElementById('img3E').src = '';
            document.getElementById('btnActualizarFotos').disabled = false;
        })

};

function get_data_fotos_cliente(codempresa,codcliente){
    return new Promise((resolve,reject)=>{
        axios.post('/fotos_cliente',{
            codempresa:codempresa,
            codigo:codcliente
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data); 
            }else{
                reject(); 
            }             
        }, (error) => {
            reject();
        });
    })

};

function update_fotos(codempresa,codcliente,f1,f2,f3){
    return new Promise((resolve,reject)=>{
        axios.post('/update_fotos_cliente',{
            codempresa:codempresa,
            codigo:codcliente,
            f1:f1,
            f2:f2,
            f3:f3,
            fecha: F.getFecha()
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data); 
            }else{
                reject(); 
            }             
        }, (error) => {
            reject();
        });
    })

};


function get_datos_cliente(codempresa,codcliente){
    
   
    $("#modal_datos").modal('show');

    document.getElementById('lbStatusDatos').innerHTML = '';
    document.getElementById('lbStatusDatos').innerHTML = 'Cargando datos...' + GlobalLoader;
    


    get_data_datos_cliente(codempresa,codcliente)
    .then((data)=>{

        data.recordset.map((r)=>{
            document.getElementById('cmbEmpresaE').value=r.CODEMPRESA;
            document.getElementById('txtCodigoE').value=r.CODIGO;
            document.getElementById('txtDPIE').value=r.DPI;
            document.getElementById('txtNombreE').value=r.NOMBRE;
            document.getElementById('txtFechaNacimientoE').value= F.clean_date(r.FECHA_NACIMIENTO);
            document.getElementById('txtAreaTrabajoE').value=r.AREA_TRABAJO;
            document.getElementById('txtSectorE').value=r.SECTOR;
            document.getElementById('cmbTSaludE').value=r.TARJETA_SALUD;
            document.getElementById('cmbTAlimentacionE').value=r.TARJETA_ALIMENTOS;
            document.getElementById('cmbTPulmonesE').value=r.TARJETA_PULMONES;    
        })
        document.getElementById('lbStatusDatos').innerHTML = '';
        
    })
    .catch(()=>{
        
        document.getElementById('lbStatusDatos').innerHTML = '';
     
        document.getElementById('txtCodigo').value='';
        document.getElementById('txtDPI').value.value='';
        document.getElementById('txtNombre').value.value='';
        document.getElementById('txtFechaNacimiento').value = F.getFecha();
        document.getElementById('txtAreaTrabajo').value='';
        document.getElementById('txtSector').value='';
        document.getElementById('cmbTSalud').value='SN';
        document.getElementById('cmbTAlimentacion').value='SN';
        document.getElementById('cmbTPulmones').value='SN';


    })

};

function get_data_datos_cliente(codempresa,codcliente){
    return new Promise((resolve,reject)=>{
        axios.post('/datos_cliente',{
            codempresa:codempresa,
            codigo:codcliente
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data); 
            }else{
                reject(); 
            }             
        }, (error) => {
            reject();
        });
    })

};

function update_datos_cliente(){

    let codempresa = document.getElementById('cmbEmpresaE').value;
    let codigo = document.getElementById('txtCodigoE').value;
    let dpi = document.getElementById('txtDPIE').value;
    let nombre = F.limpiarTexto(document.getElementById('txtNombreE').value);
    let fechanacimiento = F.devuelveFecha('txtFechaNacimientoE');
    let fecha = F.getFecha();
    let area = F.limpiarTexto(document.getElementById('txtAreaTrabajoE').value);
    let sector = F.limpiarTexto(document.getElementById('txtSectorE').value);
    let tsalud = document.getElementById('cmbTSaludE').value;
    let talimentos = document.getElementById('cmbTAlimentacionE').value;
    let tpulmones = document.getElementById('cmbTPulmonesE').value;
 
    return new Promise((resolve,reject)=>{
        axios.post('/edit_cliente',{
            codempresa:codempresa,
            codigo:codigo,
            dpi:dpi,
            nombre:nombre,
            fecha:fecha,
            fechanacimiento:fechanacimiento,
            area:area,
            sector:sector,
            tsalud:tsalud,
            talimentos:talimentos,
            tpulmones:tpulmones
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data); 
            }else{
                reject(); 
            }             
        }, (error) => {
            reject();
        });
    })

};