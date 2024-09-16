
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
                            ${view.vista_listado()}
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
                    
                    <div class="form-group">
                        <label class="negrita">Clave de acceso</label>
                        <input type="password" class="form-control negrita" id="txtP" autocomplete="off">
                    </div>
                    
                    <br>

                    <div class="form-group text-center">
                        <button class="btn btn-success btn-circle btn-xl hand shadow" id="btnI">
                            <i class="fal fa-lock"></i>
                        </button> 
                    </div>


                </div>
            </div>
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-2">

                    <div class="form-group">
                        <label>Buscar por codigo o por nombre</label>
                        <div class="input-group">
                            <input type="text" class="form-control negrita text-danger" id="txtFiltrar">
                            <button class="btn btn-info hand" id="btnBuscar">
                                <i class="fal fa-search"></i>
                            </button>
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
                            <tbody id="tblDataListado">

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
              <div class="card card-rounded col-sm-12 col-lg-5 col-xl-5 col-md-5 shadow">
                <div class="card-body p-4">

                    <div class="form-group">
                        <label class="negrita">Empresa</label>
                        <select class="form-control negrita" id="cmbEmpresa">
                        </select>
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

            
                    <div class="row">

                        <div class="card card-rounded col-sm-12 col-md shadow">
                            <div class="card-body p-4">


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
        vista_editar:()=>{

        }
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
            get_listado();
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



    F.slideAnimationTabs();

};




function initView(){

    getView();
    addListeners();

};


function limpiar_datos(){


};


function get_listado(){


};